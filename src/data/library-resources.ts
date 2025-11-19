export interface LibraryResource {
    id: string;
    title: string;
    author: string;
    year: string;
    pages?: string;
    description: string;
    coverImage: string;
    downloadUrl: string;
    category: string;
}

export const libraryResources: LibraryResource[] = [
    // ARTE
    {
        id: "amaya-poesia-visual",
        title: "Amaya, Poesía Visual",
        author: "Centro Cultural Banreservas",
        year: "2024",
        pages: "120",
        description: "Exposición dedicada a la obra del maestro Amaya, uno de los pilares del arte dominicano contemporáneo.",
        coverImage: "/amaya-poesia-visual.png",
        downloadUrl: "https://banreservas-my.sharepoint.com/:b:/p/bpcdigital/Eec8NtOtlO1PmBb9R5C_kyoBloj5Ob8pf7RrE-bjqUFUPA?e=Cv6LmC",
        category: "arte"
    },
    {
        id: "reservas-patrimoniales",
        title: "Reservas Patrimoniales Dominicanas",
        author: "Centro Cultural Banreservas",
        year: "2023",
        pages: "180",
        description: "Catálogo de las obras de arte y patrimonio cultural bajo custodia de Banreservas.",
        coverImage: "/reservas-patrimoniales.png",
        downloadUrl: "https://banreservas-my.sharepoint.com/:b:/p/bpcdigital/EeCCImASE4VAqTnPgjxHS4cBcA_cFwuzvzpyiG_2_8fokQ?e=n5IKI6",
        category: "arte"
    },
    {
        id: "el-arte-en-la-cabeza",
        title: "El Arte en la Cabeza",
        author: "Centro Cultural Banreservas",
        year: "2023",
        pages: "200",
        description: "Reflexiones sobre el proceso creativo y la mente del artista dominicano.",
        coverImage: "/arte-en-la-cabeza.jpg",
        downloadUrl: "https://banreservas-my.sharepoint.com/:b:/p/bpcdigital/EbpRidGvaNxKuKMmUGs6_JgB1E0FxWibT3_f58qBKvrgdg?e=zx3zZm",
        category: "arte"
    },

    // CLÁSICOS DE LA MIGRACIÓN DOMINICANA
    {
        id: "braceros-haitianos",
        title: "Braceros Haitianos en la República Dominicana",
        author: "Centro Cultural Banreservas",
        year: "2020",
        pages: "180",
        description: "Análisis histórico sobre la migración de trabajadores haitianos a la República Dominicana y su impacto socioeconómico.",
        coverImage: "/Clasicos de la migracion dominicana/braceros haitianos en la republica dominicana.png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "colonizacion-politica",
        title: "Colonización Política",
        author: "Centro Cultural Banreservas",
        year: "2019",
        pages: "220",
        description: "Estudio sobre las políticas de colonización y migración en la República Dominicana durante el siglo XX.",
        coverImage: "/Clasicos de la migracion dominicana/colonizacion politica .png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "garveyismo-racismo",
        title: "Garveyismo y Racismo en el Caribe",
        author: "Centro Cultural Banreservas",
        year: "2021",
        pages: "200",
        description: "Análisis del movimiento Garveyista y las dinámicas raciales en el contexto caribeño.",
        coverImage: "/Clasicos de la migracion dominicana/garveyismo y racismo en el caribe.png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "comunidad-transnacional",
        title: "La Formación de una Comunidad Transnacional",
        author: "Centro Cultural Banreservas",
        year: "2020",
        pages: "250",
        description: "Estudio sobre la formación de comunidades dominicanas transnacionales y sus redes globales.",
        coverImage: "/Clasicos de la migracion dominicana/la formacion de una comunidad transnacional.png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "politica-inmigracion-trujillo",
        title: "La Política de Inmigración del Dictador Trujillo",
        author: "Centro Cultural Banreservas",
        year: "2018",
        pages: "190",
        description: "Análisis de las políticas migratorias durante la dictadura de Rafael Leónidas Trujillo.",
        coverImage: "/Clasicos de la migracion dominicana/la politica de inmigracion del dictador trujillo.png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "dominicanos-ausentes",
        title: "Los Dominicanos Ausentes: Un Pueblo en Transición",
        author: "Centro Cultural Banreservas",
        year: "2022",
        pages: "230",
        description: "Reflexiones sobre la diáspora dominicana y los procesos de transformación social y cultural.",
        coverImage: "/Clasicos de la migracion dominicana/los dominicanis ausentes un pueblo en transicion.png",
        downloadUrl: "#",
        category: "migracion"
    },
    {
        id: "migracion-economia-cafetalera",
        title: "Migración Internacional y Economía Cafetalera",
        author: "Centro Cultural Banreservas",
        year: "2019",
        pages: "170",
        description: "Relación entre los flujos migratorios internacionales y el desarrollo de la economía cafetalera dominicana.",
        coverImage: "/Clasicos de la migracion dominicana/migracion internacional y economia cafetalera.png",
        downloadUrl: "#",
        category: "migracion"
    },

    // BIOGRAFÍAS
    {
        id: "80-anios-banco",
        title: "80 Años del Banco de Todos los Dominicanos",
        author: "Banco de Reservas",
        year: "2021",
        pages: "250",
        description: "Historia institucional de Banreservas, desde sus orígenes hasta convertirse en el banco líder de la República Dominicana.",
        coverImage: "/biografia/80 anios del banco de todos los dominicanos.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "banreservas-motor",
        title: "Banreservas: Motor de la Economía Nacional",
        author: "Varios Autores",
        year: "2020",
        pages: "180",
        description: "Análisis del impacto económico y social de Banreservas en el desarrollo dominicano.",
        coverImage: "/biografia/Banreservas motor de la economia nacional .png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "santo-domingo-entre-muros",
        title: "Santo Domingo Entre Muros",
        author: "Centro Cultural Banreservas",
        year: "2022",
        pages: "160",
        description: "Recorrido histórico por la Ciudad Colonial de Santo Domingo y sus edificaciones emblemáticas.",
        coverImage: "/biografia/Santo domingo ente muros.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "dominicanas-fuera-serie",
        title: "Dominicanas Fuera de Serie",
        author: "Varios Autores",
        year: "2023",
        pages: "220",
        description: "Biografías de mujeres dominicanas que han dejado huella en diferentes ámbitos de la sociedad.",
        coverImage: "/biografia/dominicanaas fuera de serie.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "dominicanas-voluntad-diaspora",
        title: "Dominicanas de Voluntad en la Diáspora",
        author: "Centro Cultural Banreservas",
        year: "2022",
        pages: "190",
        description: "Historias de mujeres dominicanas que han triunfado en el extranjero.",
        coverImage: "/biografia/dominicanas de voluntad en la diaspora.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "pacheco",
        title: "Pacheco",
        author: "Centro Cultural Banreservas",
        year: "2021",
        pages: "140",
        description: "Biografía del reconocido artista dominicano Pacheco y su obra.",
        coverImage: "/biografia/pachco.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "pedro-mir-familia",
        title: "Pedro Mir en Familia",
        author: "Familia Mir",
        year: "2020",
        pages: "200",
        description: "Testimonios familiares sobre la vida y obra del poeta nacional Pedro Mir.",
        coverImage: "/biografia/pedro mir en familia.png",
        downloadUrl: "#",
        category: "biografias"
    },
    {
        id: "valores-vida",
        title: "Valores de la Vida",
        author: "Centro Cultural Banreservas",
        year: "2023",
        pages: "150",
        description: "Biografías de personalidades dominicanas que han ejemplificado valores fundamentales.",
        coverImage: "/biografia/valores de la vida.png",
        downloadUrl: "#",
        category: "biografias"
    }
];

export function getResourcesByCategory(category: string): LibraryResource[] {
    return libraryResources.filter(resource => resource.category === category);
}

export function getResourceById(id: string): LibraryResource | undefined {
    return libraryResources.find(resource => resource.id === id);
}
