import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
//
function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">notlar.im</h1>
        <p className="hero__subtitle">
          <b>notlarımı</b>, <b>blog</b> yazılarımı ve{" "}
          <b>projelerimi</b> barındırdığım internet sitesi.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            📘 Notlarım
          </Link>
          <Link className="button button--secondary button--lg" to="/about">
            👨‍🏭 Özgeçmişim
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Xiaohai's Mind Palace. A place for organizing notes across multiple domains. A place for writing blogs. A place for showcasing projects."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
