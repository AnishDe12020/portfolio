// GENERATED from the Unsplash API on 2026-08-14 — a build-time cache, the
// live site never calls the API (50 req/hr limit). To refresh: hit
// /users/anishde/photos (list) and /photos/:id (exif) with a Client-ID
// header and regenerate this array.
// Fields: id = CDN photo path, slug = unsplash page slug, w/h = natural size,
// desc = author caption (used as alt text), exif = camera line for the overlay.

export const unsplashSrc = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&fm=jpg&fit=crop`;

export const photoHref = (slug: string) => `https://unsplash.com/photos/${slug}`;

export type Photo = { id: string; slug: string; w: number; h: number; desc: string; exif: string };

export const photos: Photo[] = [
  { id: '1769340285545-7beb2948e70b', slug: 'kU_iuNSq2dM', w: 4284, h: 5712, desc: 'waterfront view near Louvre Abu Dhabi at sunset with clear water, soft evening light, and a distant city skyline', exif: 'iphone 15 · f/1.6 · 1/574s · iso 50' },
  { id: '1769340186956-85b1d52ac163', slug: 'HKmv6yMioYM', w: 4284, h: 5712, desc: 'symmetrical walkway at the Louvre Abu Dhabi featuring repeating columns and geometric roof pattern, creating a calm, minimalist architectural perspective', exif: 'iphone 15 · f/1.6 · 1/121s · iso 50' },
  { id: '1769339750351-f83197826262', slug: 'LAfxjEMYwMU', w: 3024, h: 4032, desc: 'panoramic daytime view of Dubai’s skyline captured from the Burj Khalifa, revealing dense urban development, modern skyscrapers, and the city’s vast scale stretching into the distance', exif: 'iphone 15 · f/1.6 · 1/1695s · iso 50' },
  { id: '1769339781920-f508ac260e64', slug: 'CNMZ5u0Oz-s', w: 4284, h: 5712, desc: 'top-down night view of Dubai’s roads and intersections captured from Sky Views, showcasing flowing traffic, geometric layouts, and illuminated urban infrastructure', exif: 'iphone 15 · f/1.6 · 1/29s · iso 1000' },
  { id: '1769339750289-c3f2bfc87e97', slug: 'U3rJHqV2mdw', w: 3024, h: 4032, desc: 'view from Burj Khalifa of a dense urban landscape featuring intersecting highways and modern high-rise buildings, highlighting large-scale infrastructure', exif: 'iphone 15 · f/1.6 · 1/654s · iso 32' },
  { id: '1769339750380-10d847c26194', slug: '0j7Dkm0giWs', w: 3024, h: 4032, desc: 'night time view of Dubai\'s illuminated skyline featuring high-rise modern buildings, glowing city lights, roads, and energy of the city after dark', exif: 'iphone 15 · f/1.6 · 1/25s · iso 800' },
  { id: '1769339279852-ef7ded088573', slug: 'dMJGYVvmhrg', w: 4284, h: 5712, desc: 'art installation at the Museum of Future, Dubai, featuring glowing suspended forms and reflective surfaces that explore themes of technology, innovation, and the future', exif: 'iphone 15 · f/1.6 · 1/60s · iso 500' },
  { id: '1769339279829-4891dd67314e', slug: 'cdncspY2Mu0', w: 3024, h: 4032, desc: 'monarch theatre in warner bros world, abu dhabi, featuring a glowing marquee and vintage-inspired architecture that evokes classic cinema culture', exif: 'iphone 15 · f/1.6 · 1/50s · iso 80' },
  { id: '1769339279901-8695d09f7d18', slug: '6JTkC8dAwfw', w: 3024, h: 4032, desc: 'geometric exterior of a modern building in JBR, Dubai, highlighting repeating forms, clean lines and contemporary architectural design against a clear sky', exif: 'iphone 15 · f/1.6 · 1/5348s · iso 40' },
  { id: '1769338858634-b5cd7fe4bd93', slug: 'CmMZPWIyULo', w: 5712, h: 4284, desc: 'low-angle night view of the world trade center, bangalore, showcasing illuminated glass facades and modern architecture at night', exif: 'iphone 15 · f/1.6 · 1/50s · iso 400' },
  { id: '1769338858638-071238921a9f', slug: 'usgaaqceSCQ', w: 3024, h: 4032, desc: 'tall palm trees silhouetted against a softly textured evening sky, creating a calm and atmospheric scene', exif: 'iphone 15 · f/1.6 · 1/5s · iso 2000' },
  { id: '1769338858656-9a8307b9ab75', slug: 'BEVCH_BazFM', w: 4284, h: 5712, desc: 'a collection of curated vinyl records displayed on wooden shelves in a cozy record store capturing the warmth of of analog music culture', exif: 'iphone 15 · f/1.6 · 1/76s · iso 125' },
  { id: '1769338858646-770247c5bb52', slug: '1Or0H2i-vX4', w: 3810, h: 5080, desc: 'minimalist cafe counter with bold signage and soft lighting capturing modern design and contemporary coffee culture', exif: 'iphone 15 · f/1.6 · 1/100s · iso 100' },
  { id: '1769337950338-e9e7756f8e6e', slug: 'aerial-view-of-a-city-at-night-with-glowing-lights-UU5Fz6iFYWg', w: 8056, h: 6042, desc: 'aerial drone shot of a dense urban neighbourhood illuminated by warn street lights at night', exif: 'dji drone · f/1.8 · 1/10s · iso 1040' },
  { id: '1769337953149-f48f1083f0e1', slug: 'aerial-view-of-a-city-at-night-with-glowing-lights-XTKI2dWfyo0', w: 8192, h: 6144, desc: 'aeria night view of modern high-rise buildings overlooking a brightly lit urban landscape', exif: 'dji drone · f/1.8 · 1/8s · iso 1170' },
  { id: '1739197425860-a82ea7abc4a4', slug: 'urimA1cOtd8', w: 4284, h: 5712, desc: 'Road stretching ahead with early morning traffic and an overhead bridge', exif: 'iphone 15 · f/1.6 · 1/2778s · iso 50' },
  { id: '1739197127589-e3b348b9838c', slug: 'WBS3bm-E-NE', w: 4284, h: 5712, desc: 'Road stretching out at a distance with a fence on the left with haze and buildings at a distance', exif: 'iphone 15 · f/1.6 · 1/121s · iso 40' },
  { id: '1731176332462-4ec5a439b63a', slug: 'kXThh3ZdU_E', w: 4284, h: 5712, desc: 'Glowing paper lanterns illuminate a tranquil evening garden, creating a magical atmosphere as they float among dark tree branches against the twilight sky.', exif: 'iphone 15 · f/1.6 · 1/100s · iso 125' },
  { id: '1720176264489-434dd970f546', slug: 'DVxPA8xFdvI', w: 4000, h: 2996, desc: 'Sunrise at a hill station', exif: '' },
  { id: '1708967358366-53e20ade0e7f', slug: 'OmhcAK6EXOo', w: 3816, h: 5494, desc: 'Bottom to top outdoor view of the front of the rajwada palace from ground level', exif: 'iphone 15 · f/1.6 · 1/1000s · iso 50' },
  { id: '1706953643103-5d5c2066b4a0', slug: '1gj0eZsLqWI', w: 3422, h: 2567, desc: 'Sun through hazy car window', exif: 'iphone 15 · f/1.6 · 1/4000s · iso 50' },
  { id: '1702834108456-54f0cb1516a7', slug: '9vvwM9CAtzQ', w: 2414, h: 2414, desc: 'RGB mechanical keyboard close up with MacBook in the background', exif: 'iphone 15 · f/1.6 · 0.5s · iso 1250' },
  { id: '1702490258646-99c4562a0633', slug: 'sQoGnbvUbSQ', w: 3000, h: 4000, desc: 'Tree with grasslands and jungle in the background', exif: 'xiaomi · f/1.8 · 1/737s · iso 47' },
  { id: '1702206292733-a5d452e62180', slug: 'a-large-building-with-columns-and-lights-inside-of-it-rUgYfStUxvs', w: 4000, h: 3000, desc: 'Palace', exif: 'xiaomi · f/1.8 · 1/40s · iso 168' },
  { id: '1699988191259-59e8e607dfe4', slug: 'a-stone-wall-with-a-spiral-staircase-next-to-it-VpuXXZtqB_8', w: 3000, h: 4000, desc: 'Staircase in an ancient monument going up in a circular fashion', exif: 'xiaomi · f/1.8 · 1/1002s · iso 50' },
  { id: '1699988194923-50f944f92d9a', slug: 'a-large-stone-structure-with-carvings-on-it-KXsHPR2RavQ', w: 3000, h: 4000, desc: 'Front view on ancient monument', exif: 'xiaomi · f/1.8 · 1/2432s · iso 50' },
  { id: '1699988198341-7e1277496723', slug: 'a-set-of-stone-steps-leading-up-to-a-building-WQN0Ks8qEEM', w: 3000, h: 4000, desc: 'Close view of a staircase in a monument going up in a circular fashion', exif: 'xiaomi · f/1.8 · 1/734s · iso 50' },
  { id: '1699988202955-1838fd2132ec', slug: 'a-large-rock-formation-in-the-middle-of-a-forest-yaCA5gZmykg', w: 3000, h: 4000, desc: 'a large rock formation in the middle of a forest', exif: 'xiaomi · f/1.8 · 1/425s · iso 50' },
  { id: '1699988203044-dc1960ee7750', slug: 'a-close-up-of-a-rock-with-a-tree-in-the-background-Li2_mwyutgE', w: 3000, h: 4000, desc: 'a close up of a rock with a tree in the background', exif: 'xiaomi · f/1.8 · 1/50s · iso 52' },
  { id: '1699988200192-0a135516bace', slug: 'a-stone-bridge-with-a-curved-road-going-over-it-ya5DKVJ0dXM', w: 3000, h: 4000, desc: 'a stone bridge with a curved road going over it', exif: 'xiaomi · f/1.8 · 1/1584s · iso 50' },
  { id: '1696000974559-35ffac9c955d', slug: 'eu4HkS2z6fw', w: 4000, h: 3000, desc: 'Badminton court windows with light leaking in through blinds in the dark', exif: 'f/0.0' },
  { id: '1696000898182-4c7f6b3d37be', slug: 'N3BaByjmsyM', w: 4000, h: 3000, desc: 'Tea estate with trees in the background', exif: 'xiaomi · f/1.8 · 1/803s · iso 53' },
  { id: '1696000880913-85836dc76911', slug: 'pf5_6XEmoNE', w: 3000, h: 4000, desc: 'Tea estate', exif: 'xiaomi · f/1.8 · 1/2778s · iso 36' },
  { id: '1696000802418-8bda3bb261fe', slug: 'vjigipZr-KQ', w: 3000, h: 4000, desc: 'Bonfire taken with night mode with movement to create the effect', exif: '' },
  { id: '1672211775632-bcb4b68eb2bd', slug: 'a-computer-keyboard-sitting-on-top-of-a-desk-xFzG0WlstIk', w: 4000, h: 3000, desc: 'RGB keyboard in a dark room with macbook and metal pen in the background', exif: 'xiaomi · f/1.8 · 1/33s · iso 5100' },
  { id: '1642926121182-ce797bbe5184', slug: '4dzFPC0wwhA', w: 2571, h: 3428, desc: '', exif: 'xiaomi · f/1.8 · 1/50s · iso 453' },
  { id: '1642926181476-95afdd58d894', slug: 'N17o4ga6VCQ', w: 3000, h: 4000, desc: '', exif: 'xiaomi · f/1.8 · 1/100s · iso 886' },
  { id: '1642660120106-143fcdf0a2cd', slug: 'a-close-up-of-a-plant-with-red-and-green-leaves-Vkj57AlAxTU', w: 3000, h: 4000, desc: 'a close up of a plant with red and green leaves', exif: 'xiaomi · f/1.8 · 1/50s · iso 42' },
  { id: '1642660056833-1912e3ca68f8', slug: 'a-close-up-of-a-plant-with-red-flowers-DMT1LPB42s8', w: 3000, h: 4000, desc: 'a close up of a plant with red flowers', exif: 'xiaomi · f/1.8 · 1/100s · iso 127' },
  { id: '1642660021641-8f684f4c7aa2', slug: 'a-plant-with-red-flowers-and-green-leaves-ZXDRdptInQI', w: 3000, h: 4000, desc: 'a plant with red flowers and green leaves', exif: 'xiaomi · f/1.8 · 1/100s · iso 146' },
];

/** The four square crops on the homepage strip (night cities, curated). */
export const stripIds = [
  '1769337950338-e9e7756f8e6e',
  '1769339750380-10d847c26194',
  '1769339781920-f508ac260e64',
  '1769339279852-ef7ded088573',
];
