import { defineCollection, z, type SchemaContext } from "astro:content";
import { file } from "astro/loaders";

const menuItemSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    imgSrc: image().optional(),
    description: z.string(),
  });

const appetizers = defineCollection({
  loader: file("src/data/appetizers.json"),
  schema: menuItemSchema,
});

const burritos = defineCollection({
  loader: file("src/data/burritos.json"),
  schema: menuItemSchema,
});

const chicken = defineCollection({
  loader: file("src/data/chicken.json"),
  schema: menuItemSchema,
});

const desserts = defineCollection({
  loader: file("src/data/desserts.json"),
  schema: menuItemSchema,
});

const enchiladas = defineCollection({
  loader: file("src/data/enchiladas.json"),
  schema: menuItemSchema,
});

const fajitas = defineCollection({
  loader: file("src/data/fajitas.json"),
  schema: menuItemSchema,
});

const houseSpecialties = defineCollection({
  loader: file("src/data/house-specialties.json"),
  schema: menuItemSchema,
});

const kidsMenu = defineCollection({
  loader: file("src/data/kids-menu.json"),
  schema: menuItemSchema,
});

const lunchSpecials = defineCollection({
  loader: file("src/data/lunch-specials.json"),
  schema: menuItemSchema,
});

const nachos = defineCollection({
  loader: file("src/data/nachos.json"),
  schema: menuItemSchema,
});

const quesadillas = defineCollection({
  loader: file("src/data/quesadillas.json"),
  schema: menuItemSchema,
});

const salads = defineCollection({
  loader: file("src/data/salads.json"),
  schema: menuItemSchema,
});

const seafood = defineCollection({
  loader: file("src/data/seafood.json"),
  schema: menuItemSchema,
});

const steaks = defineCollection({
  loader: file("src/data/steaks.json"),
  schema: menuItemSchema,
});

const tacos = defineCollection({
  loader: file("src/data/tacos.json"),
  schema: menuItemSchema,
});

export const collections = {
  appetizers,
  burritos,
  chicken,
  desserts,
  enchiladas,
  fajitas,
  "house-specialties": houseSpecialties,
  "lunch-specials": lunchSpecials,
  "kids-menu": kidsMenu,
  nachos,
  quesadillas,
  salads,
  seafood,
  steaks,
  tacos,
};
