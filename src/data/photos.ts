// Photos on /photos, grouped by category in the order written. Images are
// hotlinked from the Unsplash CDN per their guidelines; nothing is stored here.
// `image` is the CDN photo id, `w`/`h` the original size (for aspect ratio),
// `caption` is the place (empty when unsplash has none), `meta` the camera
// line, `unsplash` the photo page id.
export type Photo = { image: string; w: number; h: number; alt: string; caption: string; meta: string; unsplash: string };
export type Category = { title: string; photos: Photo[] };

export const cdn = (image: string, w: number) =>
  `https://images.unsplash.com/photo-${image}?w=${w}&q=60&auto=format&fit=max`;
export const page = (id: string) =>
  `https://unsplash.com/photos/${id}?utm_source=anishde.dev&utm_medium=referral`;

export const categories: Category[] = [
  { title: 'dubai & abu dhabi', photos: [
    { image: '1769339750289-c3f2bfc87e97', w: 3024, h: 4032, alt: 'tangled highway interchange between glass towers, seen from high above', caption: 'burj khalifa, dubai', meta: 'iphone 15 · f/1.6 · 1/654s · iso 32', unsplash: 'U3rJHqV2mdw' },
    { image: '1769339781920-f508ac260e64', w: 4284, h: 5712, alt: 'looking straight down a lit tower onto curving roads at night', caption: 'sky views observatory, dubai', meta: 'iphone 15 · f/1.6 · 1/29s · iso 1000', unsplash: 'CNMZ5u0Oz-s' },
    { image: '1769339279901-8695d09f7d18', w: 3024, h: 4032, alt: 'white building facade of stacked balconies against a clear blue sky', caption: 'jbr, dubai', meta: 'iphone 15 · f/1.6 · 1/5348s · iso 40', unsplash: '6JTkC8dAwfw' },
    { image: '1769340285545-7beb2948e70b', w: 4284, h: 5712, alt: 'waterfront promenade railing at sunset with a skyline across the water', caption: 'louvre abu dhabi', meta: 'iphone 15 · f/1.6 · 1/574s · iso 50', unsplash: 'kU_iuNSq2dM' },
    { image: '1769339750380-10d847c26194', w: 3024, h: 4032, alt: 'night skyline of lit towers with a tall spire at the center', caption: 'sky views observatory, dubai', meta: 'iphone 15 · f/1.6 · 1/25s · iso 800', unsplash: '0j7Dkm0giWs' },
    { image: '1769339750351-f83197826262', w: 3024, h: 4032, alt: 'hazy morning over a dense cluster of skyscrapers', caption: 'burj khalifa, dubai', meta: 'iphone 15 · f/1.6 · 1/1695s · iso 50', unsplash: 'LAfxjEMYwMU' },
    { image: '1769340186956-85b1d52ac163', w: 4284, h: 5712, alt: 'symmetrical walkway at the louvre abu dhabi featuring repeating columns and geometric roof pattern, creating a calm, minimalist architectural perspective', caption: 'louvre abu dhabi', meta: 'iphone 15 · f/1.6 · 1/121s · iso 50', unsplash: 'HKmv6yMioYM' },
    { image: '1769339279852-ef7ded088573', w: 4284, h: 5712, alt: 'art installation at the museum of future, dubai, featuring glowing suspended forms and reflective surfaces that explore themes of technology, innovation, and the future', caption: 'museum of the future, dubai', meta: 'iphone 15 · f/1.6 · 1/60s · iso 500', unsplash: 'dMJGYVvmhrg' },
    { image: '1769339279829-4891dd67314e', w: 3024, h: 4032, alt: 'monarch theatre in warner bros world, abu dhabi, featuring a glowing marquee and vintage-inspired architecture that evokes classic cinema culture', caption: 'warner bros. world, abu dhabi', meta: 'iphone 15 · f/1.6 · 1/50s · iso 80', unsplash: 'cdncspY2Mu0' },
  ] },
  { title: 'bengaluru', photos: [
    { image: '1769337950338-e9e7756f8e6e', w: 8056, h: 6042, alt: 'city lights spreading across dense rooftops at night, seen from above', caption: '', meta: 'dji mini 4 pro · f/1.8 · 1/10s · iso 1040', unsplash: 'UU5Fz6iFYWg' },
    { image: '1739197425860-a82ea7abc4a4', w: 4284, h: 5712, alt: 'auto rickshaw on a road beneath elevated metro pillars', caption: 'bengaluru', meta: 'iphone 15 · f/1.6 · 1/2778s · iso 50', unsplash: 'urimA1cOtd8' },
    { image: '1769338858634-b5cd7fe4bd93', w: 5712, h: 4284, alt: 'curved office tower edged with light against a black sky', caption: 'world trade center, bengaluru', meta: 'iphone 15 · f/1.6 · 1/50s · iso 400', unsplash: 'CmMZPWIyULo' },
    { image: '1769337953149-f48f1083f0e1', w: 8192, h: 6144, alt: 'aeria night view of modern high-rise buildings overlooking a brightly lit urban landscape', caption: 'bengaluru', meta: 'dji mini 4 pro · f/1.8 · 1/8s · iso 1170', unsplash: 'XTKI2dWfyo0' },
    { image: '1769338858638-071238921a9f', w: 3024, h: 4032, alt: 'tall palm trees silhouetted against a softly textured evening sky, creating a calm and atmospheric scene', caption: 'lalbagh, bengaluru', meta: 'iphone 15 · f/1.6 · 1/5s · iso 2000', unsplash: 'usgaaqceSCQ' },
    { image: '1739197127589-e3b348b9838c', w: 4284, h: 5712, alt: 'road stretching out at a distance with a fence on the left with haze and buildings at a distance', caption: 'bengaluru', meta: 'iphone 15 · f/1.6 · 1/121s · iso 40', unsplash: 'WBS3bm-E-NE' },
    { image: '1706953643103-5d5c2066b4a0', w: 3422, h: 2567, alt: 'sun through hazy car window', caption: 'bengaluru', meta: 'iphone 15 · f/1.6 · 1/4000s · iso 50', unsplash: '1gj0eZsLqWI' },
  ] },
  { title: 'around india', photos: [
    { image: '1708967358366-53e20ade0e7f', w: 3816, h: 5494, alt: 'ornate palace facade with arched balconies, looking up', caption: 'rajwada, indore', meta: 'iphone 15 · f/1.6 · 1/1000s · iso 50', unsplash: 'OmhcAK6EXOo' },
    { image: '1720176264489-434dd970f546', w: 4000, h: 2996, alt: 'sun setting into a dark horizon', caption: 'darjeeling', meta: '', unsplash: 'DVxPA8xFdvI' },
    { image: '1696000898182-4c7f6b3d37be', w: 4000, h: 3000, alt: 'tea estate with trees in the background', caption: 'tea estate, darjeeling', meta: 'mi 11x · f/1.8 · 1/803s · iso 53', unsplash: 'N3BaByjmsyM' },
    { image: '1696000880913-85836dc76911', w: 3000, h: 4000, alt: 'tea estate', caption: 'tea estate, darjeeling', meta: 'mi 11x · f/1.8 · 1/2778s · iso 36', unsplash: 'pf5_6XEmoNE' },
    { image: '1702206292733-a5d452e62180', w: 4000, h: 3000, alt: 'palace', caption: 'mysore palace', meta: 'mi 11x · f/1.8 · 1/40s · iso 168', unsplash: 'rUgYfStUxvs' },
    { image: '1702490258646-99c4562a0633', w: 3000, h: 4000, alt: 'tree with grasslands and jungle in the background', caption: 'ranthambore national park', meta: 'mi 11x · f/1.8 · 1/737s · iso 47', unsplash: 'sQoGnbvUbSQ' },
    { image: '1699988191259-59e8e607dfe4', w: 3000, h: 4000, alt: 'staircase in an ancient monument going up in a circular fashion', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/1002s · iso 50', unsplash: 'VpuXXZtqB_8' },
    { image: '1699988194923-50f944f92d9a', w: 3000, h: 4000, alt: 'front view on ancient monument', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/2432s · iso 50', unsplash: 'KXsHPR2RavQ' },
    { image: '1699988198341-7e1277496723', w: 3000, h: 4000, alt: 'close view of a staircase in a monument going up in a circular fashion', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/734s · iso 50', unsplash: 'WQN0Ks8qEEM' },
    { image: '1699988202955-1838fd2132ec', w: 3000, h: 4000, alt: 'a large rock formation in the middle of a forest', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/425s · iso 50', unsplash: 'yaCA5gZmykg' },
    { image: '1699988203044-dc1960ee7750', w: 3000, h: 4000, alt: 'a close up of a rock with a tree in the background', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/50s · iso 52', unsplash: 'Li2_mwyutgE' },
    { image: '1699988200192-0a135516bace', w: 3000, h: 4000, alt: 'a stone bridge with a curved road going over it', caption: 'sanchi', meta: 'mi 11x · f/1.8 · 1/1584s · iso 50', unsplash: 'ya5DKVJ0dXM' },
  ] },
  { title: 'other', photos: [
    { image: '1769338858656-9a8307b9ab75', w: 4284, h: 5712, alt: 'crates and shelves of vinyl records in a warmly lit store', caption: '', meta: 'iphone 15 · f/1.6 · 1/76s · iso 125', unsplash: 'BEVCH_BazFM' },
    { image: '1769338858646-770247c5bb52', w: 3810, h: 5080, alt: 'minimalist cafe counter with bold signage and soft lighting capturing modern design and contemporary coffee culture', caption: '', meta: 'iphone 15 · f/1.6 · 1/100s · iso 100', unsplash: '1Or0H2i-vX4' },
    { image: '1731176332462-4ec5a439b63a', w: 4284, h: 5712, alt: 'glowing paper lanterns illuminate a tranquil evening garden, creating a magical atmosphere as they float among dark tree branches against the twilight sky', caption: '', meta: 'iphone 15 · f/1.6 · 1/100s · iso 125', unsplash: 'kXThh3ZdU_E' },
    { image: '1702834108456-54f0cb1516a7', w: 2414, h: 2414, alt: 'rgb mechanical keyboard close up with macbook in the background', caption: '', meta: 'iphone 15 · f/1.6 · 0.5s · iso 1250', unsplash: '9vvwM9CAtzQ' },
    { image: '1672211775632-bcb4b68eb2bd', w: 4000, h: 3000, alt: 'rgb keyboard in a dark room with macbook and metal pen in the background', caption: '', meta: 'mi 11x · f/1.8 · 1/33s · iso 5100', unsplash: 'xFzG0WlstIk' },
    { image: '1696000974559-35ffac9c955d', w: 4000, h: 3000, alt: 'badminton court windows with light leaking in through blinds in the dark', caption: '', meta: '', unsplash: 'eu4HkS2z6fw' },
    { image: '1696000802418-8bda3bb261fe', w: 3000, h: 4000, alt: 'bonfire taken with night mode with movement to create the effect', caption: '', meta: '', unsplash: 'vjigipZr-KQ' },
  ] },
  { title: 'flowers', photos: [
    { image: '1642926121182-ce797bbe5184', w: 2571, h: 3428, alt: '', caption: '', meta: 'mi 11x · f/1.8 · 1/50s · iso 453', unsplash: '4dzFPC0wwhA' },
    { image: '1642926181476-95afdd58d894', w: 3000, h: 4000, alt: '', caption: '', meta: 'mi 11x · f/1.8 · 1/100s · iso 886', unsplash: 'N17o4ga6VCQ' },
    { image: '1642660120106-143fcdf0a2cd', w: 3000, h: 4000, alt: 'a close up of a plant with red and green leaves', caption: '', meta: 'mi 11x · f/1.8 · 1/50s · iso 42', unsplash: 'Vkj57AlAxTU' },
    { image: '1642660056833-1912e3ca68f8', w: 3000, h: 4000, alt: 'a close up of a plant with red flowers', caption: '', meta: 'mi 11x · f/1.8 · 1/100s · iso 127', unsplash: 'DMT1LPB42s8' },
    { image: '1642660021641-8f684f4c7aa2', w: 3000, h: 4000, alt: 'a plant with red flowers and green leaves', caption: '', meta: 'mi 11x · f/1.8 · 1/100s · iso 146', unsplash: 'ZXDRdptInQI' },
  ] },
];

export const photos: Photo[] = categories.flatMap((c) => c.photos);
