export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e008bdb99332ea41db5fe6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-bloghc-studio',
                  apiId: '4b381947-18d8-4a2a-83ad-dc8d334fb225'
                },
                {
                  buildHookId: '5e008bdbe9ce846bd72ae21c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-bloghc',
                  apiId: '56f9d97c-a669-4933-bd0f-8eed615949f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simondodson/sanity-gatsby-bloghc',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-bloghc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
