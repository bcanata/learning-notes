import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Notlarım",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Birçok farklı konuda{" "}
        <Link to="/docs">notlarımı</Link> tuttuğum bölüm.
      </>
    ),
  },
  {
    title: "Başka Bir Sayfa",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Buraya da bambaşka bir sayfa{" "}
        <Link to="/university">gelecek</Link>.
      </>
    ),
  },
  {
    title: "Projelerim",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Oluşturduğum bazı <Link to="/showcase">projeler</Link>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
