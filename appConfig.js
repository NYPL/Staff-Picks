const config = {
  port: 3001,
  webpackDevServerPort: 3000,
  baseUrl: '/books-music-movies/recommendations/best-books',
  base404: '/books-music-movies/recommendations/best-books/404',
  baseApiUrl: '/books-music-movies/recommendations/best-books/api/',
  metaTags: {
    ya: [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Best Books for Teens' },
      { property: 'og:title', content: 'Best Books for Teens' },
      { property: 'og:description', content: 'Explore The New York Public Library\'s annual ' +
        'selection of outstanding young adult titles.' },
      { property: 'og:url', content: 'https://www.nypl.org/books-music-movies/recommendations' +
        '/best-books/ya' },
      { property: 'og:image', content: 'https://d140u095r09w96.cloudfront.net/sites/default/' +
        'files/teens-600x335.jpg' },
      { property: 'og:image:alt', content: 'Featured title: The Wendy Project by Melissa Jane ' +
        'Osborne, illustrated by Veronica Fish' },
      { property: 'og:image:width', content: '335' },
      { property: 'og:image:height', content: '600' },
      { name: 'twitter:title', content: 'Best Books for Teens' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nypl' },
      { name: 'twitter:creator', content: '@nypl' },
      { name: 'twitter:description', content: 'Explore The New York Public Library\'s annual ' +
        'selection of outstanding young adult titles.' },
      { name: 'twitter:image', content: 'https://d140u095r09w96.cloudfront.net/sites/default/' +
        'files/teens-600x335.jpg' },
      { name: 'twitter:image:alt', content: 'Featured title: The Wendy Project by Melissa ' +
        'Jane Osborne, illustrated by Veronica Fish' },
    ],
    childrens: [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Best Books for Kids' },
      { property: 'og:title', content: 'Best Books for Kids' },
      { property: 'og:description', content: 'Explore The New York Public Library\'s annual ' +
        'selection of outstanding children\'s titles.' },
      { property: 'og:url', content: 'https://www.nypl.org/books-music-movies/recommendations' +
        '/best-books/childrens' },
      { property: 'og:image', content: 'https://d140u095r09w96.cloudfront.net/sites/default/' +
        'files/kids-600x335.jpg' },
      { property: 'og:image:alt', content: 'Featured title: The Book of Mistakes by ' +
        'Corinna Luyken' },
      { property: 'og:image:width', content: '335' },
      { property: 'og:image:height', content: '600' },
      { name: 'twitter:title', content: 'Best Books for Kids' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nypl' },
      { name: 'twitter:creator', content: '@nypl' },
      { name: 'twitter:description', content: 'Explore The New York Public Library\'s annual ' +
        'selection of outstanding children\'s titles.' },
      { name: 'twitter:image', content: 'https://d140u095r09w96.cloudfront.net/sites/default/' +
        'files/kids-600x335.jpg' },
      { name: 'twitter:image:alt', content: 'Featured title: The Book of Mistakes by ' +
        'Corinna Luyken' },
    ],
    'staff-picks': [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Staff Picks' },
      { property: 'og:title', content: 'Staff Picks' },
      { property: 'og:description', content: 'Nobody loves books more than our experts. Browse and filter hundreds of their favorites.' },
      { property: 'og:url', content: 'https://www.nypl.org/books-music-movies/recommendations' +
        '/best-books/staff-picks' },
      { property: 'og:image', content: 'https://www.nypl.org/books-music-movies/recommendations' +
        '/best-books/src/client/images/shelftalker.4.2.png' },
      { property: 'og:image:alt', content: 'Featured title: Anathem by Neal Stephenson' },
      { property: 'og:image:width', content: '335' },
      { property: 'og:image:height', content: '600' },
      { name: 'twitter:title', content: 'Staff Picks' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nypl' },
      { name: 'twitter:creator', content: '@nypl' },
      { name: 'twitter:description', content: 'Nobody loves books more than our experts. Browse and filter hundreds of their favorites.' },
      { name: 'twitter:image', content: 'https://www.nypl.org/books-music-movies/recommendations' +
        '/best-books/src/client/images/shelftalker.4.2.png' },
      { name: 'twitter:image:alt', content: 'Featured title: Anathem by Neal Stephenson' },
    ],
  },
  seasons: {
    Spring: ['March', 'April', 'May'],
    Summer: ['June', 'July', 'August'],
    Fall: ['September', 'October', 'November'],
    Winter: ['December', 'January', 'February'],
  },
  recommendationsLink: {
    url: 'https://www.nypl.org/books-music-movies/recommendations',
    label: 'Recommendations',
  },
  aboutUrls: {
    print: 'https://www.nypl.org/accessibility/print-disabilities',
    about: 'https://www.nypl.org/books-music-movies/recommendations/about/annual-lists',
  },
  publicKey:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA44ilHg/PxcJYsISHMRyo\n' +
    'xsmez178qZpkJVXg7rOMVTLZuf05an7Pl+lX4nw/rqcvGQDXyrimciLgLkWu00xh\n' +
    'm6h6klTeJSNq2DgseF8OMw2olfuBKq1NBQ/vC8U0l5NJu34oSN4/iipgpovqAHHB\n' +
    'GV4zDt0EWSXE5xpnBWi+w1NMAX/muB2QRfRxkkhueDkAmwKvz5MXJPay7FB/WRjf\n' +
    '+7r2EN78x5iQKyCw0tpEZ5hpBX831SEnVULCnpFOcJWMPLdg0Ff6tBmgDxKQBVFI\n' +
    'Q9RrzMLTqxKnVVn2+hVpk4F/8tMsGCdd4s/AJqEQBy5lsq7ji1B63XYqi5fc1SnJ\n' +
    'EQIDAQAB\n' +
    '-----END PUBLIC KEY-----',
  heroData: {
    staffPicks: {
      category: '',
      header: 'Staff Picks',
      description: 'Nobody loves books more than our experts. ' +
        'Browse and filter hundreds of their favorites.',
      heroImageUrl: '',
      sectionTitle: 'BOOKS/MUSIC/MOVIES',
    },
    ya: {
      category: '',
      header: 'Best Books for Teens',
      description: 'Explore our annual selection of outstanding young adult titles.',
      heroImageUrl: 'src/client/images/desktop.teens.cover.2017.png',
      sectionTitle: '',
    },
    childrens: {
      category: '',
      header: 'Best Books for Kids',
      description: 'Explore our annual selection of outstanding children\'s titles.',
      heroImageUrl: 'src/client/images/2019-best-books-children-banner.png',
      sectionTitle: '',
    },
  },
  pageTitle: {
    ya: 'Best Books for Teens | NYPL',
    childrens: 'Best Books for Kids | NYPL',
    'staff-picks': 'NYPL | Staff Picks',
  },
  requestUrlsText: {
    catalog: 'Request Book',
    ebook: 'Request E-Book',
  },
  socialSharing: {
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
    twitter: 'https://twitter.com/intent/tweet?',
  },
  staffPicksListOptions: {
    season: {
      fieldsetName: 'season',
      currentValue: '',
      options: [],
    },
    audience: {
      fieldsetName: 'audience',
      currentValue: '',
      options: [
        { name: 'Adult', value: 'Adult' },
        { name: 'Young Adult', value: 'YA' },
        { name: 'Children', value: 'Children' },
      ],
    },
  },
  annualListOptions: {
    season: {
      fieldsetName: 'year',
      currentValue: '',
      options: [],
    },
  },
  audienceMap: {
    Adult: 'Adult',
    YA: 'Young Adult',
    Children: 'Children',
  },
  niceLabelMap: {
    'staff-picks': 'Staff Picks',
    ya: 'YA',
    teens: 'YA',
    kids: 'Childrens',
    childrens: 'Childrens',
  },
};

export default config;
