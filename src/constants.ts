import type { CollectionKey } from "astro:content";

export const twitter = "@casa_realmexicanarestaurant";

export const orderUrl =
  "https://www.foodbooking.com/ordering/restaurant/menu?company_uid=7f1df676-4360-4851-96e8-aa60864e56e2&restaurant_uid=f5c2d93d-3eb3-4f8a-9a1a-a1abb32c9dba";

export const defaultMeta = {
  title: "Peppers Mexican Cuisine",
  description:
    "Savor the best Mexican food in Biddeford, Maine! From flavorful tacos to fresh guacamole, enjoy an unforgettable culinary experience at our renowned restaurant",
  ogImagePath: "og.webp",
};

export const socialLinks = {
  DoorDash:
    "https://www.doordash.com/store/peppers-mexican-cuisine-biddeford-33873825/63160946/",
};

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
];

export const categories: {
  title: string;
  slug: CollectionKey;
}[] = [
  {
    title: "Appetizers",
    slug: "appetizers",
  },
  {
    title: "Burritos",
    slug: "burritos",
  },
  {
    title: "Chicken",
    slug: "chicken",
  },
  {
    title: "Desserts",
    slug: "desserts",
  },
  {
    title: "Enchiladas",
    slug: "enchiladas",
  },
  {
    title: "Fajitas",
    slug: "fajitas",
  },
  {
    title: "House Specialties",
    slug: "house-specialties",
  },
  {
    title: "Kids Menu",
    slug: "kids-menu",
  },
  {
    title: "Lunch Specials",
    slug: "lunch-specials",
  },
  {
    title: "Nachos",
    slug: "nachos",
  },
  {
    title: "Quesadillas",
    slug: "quesadillas",
  },
  {
    title: "Salads",
    slug: "salads",
  },
  {
    title: "Seafood",
    slug: "seafood",
  },
  {
    title: "Steak",
    slug: "steaks",
  },
  {
    title: "Tacos",
    slug: "tacos",
  },
];
