import Home from './views/Home';
import Inclusive from './views/patterns/Inclusive';
import Writing from './views/patterns/Writing';
import Colors from './views/patterns/Colors';
import Buttons from './views/patterns/Buttons';

// import ComponentDocs from './views/common/ComponentDocs';

// import KCheckboxesAPI from '!vue-doc!kolibri.shared.KCheckbox';
// import KBreadcrumbsAPI from '!vue-doc!kolibri.shared.KBreadcrumbs';

function apiLoaderString(componentName) {
  return `!vue-doc!kolibri.shared.${componentName}`;
}

const componentNames = ['KCheckbox'];
const loaderStrings = componentNames.map(apiLoaderString());

require.ensure(loaderStrings, function(require) {
  for (const loader in loaderStrings) {
    console.log(require(loader));
  }
});

const homeRoute = [
  {
    path: `/`,
    component: Home,
    meta: { title: 'Home' },
  },
];

const patternRoutes = [
  {
    path: `/patterns/inclusive`,
    component: Inclusive,
    meta: { title: 'Inclusive design' },
  },
  {
    path: `/patterns/writing`,
    component: Writing,
    meta: { title: 'Writing style' },
  },
  {
    path: `/patterns/colors`,
    component: Colors,
    meta: { title: 'Colors' },
  },
  {
    path: `/patterns/buttons`,
    component: Buttons,
    meta: { title: 'Buttons and links' },
  },
];

const componentRoutes = [
  // {
  //   name: 'KBreadcrumbs',
  //   path: `/components/KBreadcrumbs`,
  //   component: ComponentDocs,
  //   meta: { componentAPI: KBreadcrumbsAPI },
  // },
  // {
  //   name: 'KCheckboxes',
  //   path: `/components/KCheckbox`,
  //   component: ComponentDocs,
  //   meta: { componentAPI: KCheckboxesAPI },
  // },
];

const allRoutes = homeRoute.concat(patternRoutes).concat(componentRoutes);
export { allRoutes, patternRoutes, componentRoutes };
