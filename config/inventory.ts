import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  //some types
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    //include all of the data we specified according to the types
    //we specified in our schema
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "canvas_bag_1",
    name: "Canvas  Bag",
    description: ` supersized durable bag is crafted in durable waxed cotton canvas that's rugged , ideal for hauling all of your stuff.`,
    price: 1800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "tote_bag_1",
    name: "Tote Bag",
    description: ` Our supersized tote  takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 1500,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["blue"],
    currency: "USD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "braided_leather_belt_1",
    name: "Braided Leather Belt",
    description: `These  leather belts are guaranteed to pull together any outfit. They're made of vegetable-tanned Italian leather, which means they have natural highs and lows of color and will look even better over time.`,
    price: 1999,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "woolblend_suit_belt_1",
    name: "Wool-Blend Suit Belt",
    description: ` The strong materials will take on your wear patterns and look even better over time.`,
    price: 1599,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "wool_scarf_1",
    name: "Wool Scarf",
    description: `this scarf is an elegant and cozy addition to your winter wardrobe.`,
    price: 6199,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["scarves"],
    colors: ["green"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 2000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "down_mittens_1",
    name: "Down Mittens",
    description: ` Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
    price: 1999,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "brooks_sunglasses_1",
    name: "Brooks Sunglasses",
    description: `These are timeless sunglasses  The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
    price: 42000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["yellow"],
    currency: "USD",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "dock_sunglasses_1",
    name: "Dock Sunglasses",
    description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
    price: 1599,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    currency: "USD",
  },
]
