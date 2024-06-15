import useInView from "react-cool-inview";
import { motion as Motion } from "framer-motion";
import Card from "@components/Card";
import SeiAnimation from "./Animation";

import Team from "./Team";

import { getFirstName } from "/lib/naming";

import team from "/data/team.json";

import styles from "./style.module.css";

function sortListMembers(members) {
  return members.sort((a, b) =>
    getFirstName(a.name).localeCompare(getFirstName(b.name))
  );
}

function Animation() {
  const { observe, inView } = useInView({
    threshold: 0.25,
    onChange: ({ observe, unobserve }) => {
      unobserve();
      observe();
    },
  });

  return (
    /* We need to have height set in order for inView to work properly */
    <div ref={observe} style={{ height: "25px" }}>
      {inView ? (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ y: -15, opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </Motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Organization() {
  return (
    <section className="spacing relative grid grid-cols-1 gap-x-32 gap-y-8 py-20 lg:grid-cols-2">
      <div className="text-white">
        <h2 className="font-terminal-uppercase mb-4 select-none text-4xl font-bold">
          Equipa Projeto
        </h2>
        <p className="font-imedium">
          A incrível equipa que preparou esta grande atividade para ti!
        </p>
      </div>

      <Team
        title={team["coordenacao"].title}
        list={sortListMembers(team["coordenacao"].list)}
        cols={3}
      />

      <Team
        title={team["animacao"].title}
        list={sortListMembers(team["animacao"].list)}
      />

      <Team
        title={team["comunicacao"].title}
        list={sortListMembers(team["comunicacao"].list)}
      />

      <Team
        title={team["forum"].title}
        list={sortListMembers(team["forum"].list)}
      />

      <Team
        title={team["logistica"].title}
        list={sortListMembers(team["logistica"].list)}
      />
      <Team
        title={team["embaixador"].title}
        list={sortListMembers(team["embaixador"].list)}
      />
      <Team
        title={team["observadores"].title}
        list={sortListMembers(team["observadores"].list)}
      />
    </section>
  );
}
