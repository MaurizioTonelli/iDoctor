export const sidebarData = [
  {
    title: "Inicio",
    auth: ["doctor", "administrador", "enfermero", "laboratorista"],
    url: "/dashboard/",
  },
  {
    title: "Mis pacientes",
    auth: ["doctor", "enfermero", "administrador"],
    url: "/dashboard/pacientes",
  },
  {
    title: "Mis consultas",
    auth: ["doctor"],
    url: "/dashboard/consultas",
  },
  {
    title: "Exámenes médicos",
    auth: ["doctor", "enfermero"],
    url: "/dashboard/examenes",
  },
  {
    title: "Exámenes médicos a generar",
    auth: ["laboratorista"],
    url: "/dashboard/examenesagenerar",
  },
  {
    title: "Personal",
    auth: ["administrador"],
    url: "/dashboard/personal",
  },
];
