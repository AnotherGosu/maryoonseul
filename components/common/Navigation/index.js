import styles from "./Navigation.module.scss";

import NavLink from "./components/NavLink";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      {navLinks.map((link) => (
        <NavLink key={link.navLinkId} {...link} />
      ))}
    </nav>
  );
}

const navLinks = [
  {
    navLinkTitle: "Зачем нужен курс",
    navLinkId: "reason",
  },
  {
    navLinkTitle: "Особенности",
    navLinkId: "benefits",
  },
  {
    navLinkTitle: "Что включено",
    navLinkId: "included",
  },
  {
    navLinkTitle: "Для кого этот курс",
    navLinkId: "audience",
  },
  {
    navLinkTitle: "Стоимость",
    navLinkId: "price",
  },
  {
    navLinkTitle: "Присоединиться",
    navLinkId: "join",
  },
  {
    navLinkTitle: "Отзывы",
    navLinkId: "reviews",
  },
  {
    navLinkTitle: "Обратная связь",
    navLinkId: "contacts",
    isLastLink: true,
  },
];
