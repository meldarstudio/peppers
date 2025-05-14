export class MenuTOC extends HTMLElement {
  #current = this.querySelector<HTMLAnchorElement>('a[aria-current="true"]');

  private readonly _nav =
    this.querySelector<HTMLUListElement>(".scroll-container");

  protected set current(link: HTMLAnchorElement) {
    if (link === this.#current) return;
    if (this.#current) this.#current.removeAttribute("aria-current");
    link.setAttribute("aria-current", "true");
    this.#current = link;
    this.scrollNavIntoView();
  }

  private onIdle = (cb: IdleRequestCallback) =>
    (window.requestIdleCallback || ((cb) => setTimeout(cb, 1)))(cb);

  constructor() {
    super();
    this.onIdle(() => this.init());
  }

  private init = (): void => {
    /** All the links in the table of contents. */
    const links = Array.from(this.querySelectorAll<HTMLAnchorElement>("a"));
    /** All the headings in the main content. */
    const targets =
      document.querySelectorAll<HTMLHeadingElement>("main section[id]");

    /** Handle intersections and set the current link to the heading for the current intersection. */
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        const link = links.find(
          (link) => link.hash === "#" + encodeURIComponent(target.id),
        );
        if (link) {
          this.current = link;
          break;
        }
      }
    };

    let observer: IntersectionObserver | undefined;
    const observe = () => {
      if (observer) return;
      observer = new IntersectionObserver(setCurrent, {
        rootMargin: "-50px 0px -40% 0px",
      });
      // eslint-disable-next-line
      targets.forEach((h) => observer!.observe(h));
    };
    observe();

    let resizeTimeout: NodeJS.Timeout;

    window.addEventListener("resize", () => {
      // Disable intersection observer while window is resizing.
      if (observer) {
        observer.disconnect();
        observer = undefined;
      }
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.onIdle(observe), 200);
    });

    if (this._nav)
      this._nav.addEventListener("scroll", () => this.updateFade());
    this.updateFade();
  };

  updateFade() {
    if (!this._nav) return;

    const { offsetWidth: containerWidth, scrollWidth, scrollLeft } = this._nav;

    // Calculate fade states
    const showLeftFade = scrollLeft > 0;
    const showRightFade = Math.ceil(scrollLeft + containerWidth) < scrollWidth;

    requestAnimationFrame(() => {
      if (!this._nav) return;
      this._nav.style.setProperty("--fade-left", showLeftFade ? "1" : "0");
      this._nav.style.setProperty("--fade-right", showRightFade ? "1" : "0");
    });
  }

  scrollNavIntoView() {
    if (!this.#current || !this._nav) return;

    const itemRect = this.#current.getBoundingClientRect();
    const containerRect = this._nav.getBoundingClientRect();

    const isOutOfView =
      itemRect.left < containerRect.left ||
      itemRect.right > containerRect.right;

    if (isOutOfView) {
      this._nav.scrollBy({
        left: itemRect.left - containerRect.left - 20,
        behavior: "smooth",
      });
    }
  }
}

customElements.define("menu-toc", MenuTOC);
