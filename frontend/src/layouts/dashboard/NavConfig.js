// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  /* {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  }, */
  {
    title: 'Agregar Película',
    path: '/dashboard/agregarpelicula',
    icon: getIcon('eva:file-add-outline'),
  },
  {
    title: 'Editar Película',
    path: '/dashboard/editarpelicula',
    icon: getIcon('eva:edit-2-outline'),
  },
  {
    title: 'Películas',
    path: '/dashboard/products',
    icon: getIcon('eva:grid-outline'),
    /* shopping-bag-fill */
  },
  /* {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  }, */
  /* {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  }, */
  /* {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  }, */
  /* {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  }, */
  /* {
    title: 'No encontrada',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  }, */
];

export default navConfig;
