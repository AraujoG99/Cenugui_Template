import { useEffect, useState } from "react";

import { motion as Motion } from "framer-motion";

import Card from "@components/Card";
import Return from "@components/Return";
import { SignUpForm } from "./components";
import Title from "@layout/moonstone/authentication/Title";
import Text from "@layout/moonstone/authentication/Text";

import { getCourses } from "@lib/api";

interface Course {
  id: any;
  name: string;
}

function Signup() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "5", name: "5 - Ronfe" },
    { id: "22", name: "22 - São Paio de Figueiredo" },
    { id: "28", name: "28 - São Torcato" },
    { id: "83", name: "83 - Airão Santa Maria" },
    { id: "84", name: "84 - Serzedelo" },
    { id: "87", name: "87 - Barco" },
    { id: "106", name: "106 - Selho São Lourenço" },
    { id: "108", name: "108 - Fermentões" },
    { id: "145", name: "145 - Azurém" },
    { id: "146", name: "146 - Guardizela" },
    { id: "199", name: "199 - Costa" },
    { id: "200", name: "200 - Polvoreira" },
    { id: "279", name: "279 - São Miguel Vizela" },
    { id: "307", name: "307 - Ponte São João" },
    { id: "316", name: "316 - Sande São Martinho" },
    { id: "322", name: "322 - Urgezes" },
    { id: "323", name: "323 - Prazins Santa Eufémia" },
    { id: "331", name: "331 - São Dâmaso" },
    { id: "365", name: "365 - Corvite" },
    { id: "366", name: "366 - Brito" },
    { id: "386", name: "386 - Selho  São Cristovão" },
    { id: "409", name: "409 - Gondar" },
    { id: "428", name: "428 - Abação" },
    { id: "454", name: "454 - Longos" },
    { id: "455", name: "455 - Vermil" },
    { id: "456", name: "456 - Silvares" },
    { id: "457", name: "457 - Candoso São Martinho" },
    { id: "532", name: "532 - Mascotelos" },
    { id: "546", name: "546 - Selho São Jorge- Pevidém" },
    { id: "566", name: "566 - Creixomil" },
    { id: "567", name: "567 - São Paio Vizela" },
    { id: "662", name: "662 - Sande Vila Nova" },
    { id: "663", name: "663 - Moreira de Cónegos" },
    { id: "664", name: "664 - Leitões" },
    { id: "665", name: "665 - São Vicente de Oleiros" },
    { id: "666", name: "666 - Caldas das Taipas" },
    { id: "667", name: "667 - Airão São João" },
    { id: "702", name: "702 - Mesão Frio" },
    { id: "703", name: "703 - Infantas" },
    { id: "814", name: "814 - Conceição" },
    { id: "830", name: "830 - Briteiros Santo Estevão" },
    { id: "858", name: "858 - Lordelo" },
    { id: "882", name: "882 - Prazins Santo Tirso" },
    { id: "883", name: "883 - Santa Leocádia Briteiros" },
    { id: "884", name: "884 - Nespereira" },
    { id: "886", name: "886 - Serzedo" },
    { id: "936", name: "936 - Calvos" },
    { id: "1019", name: "1019 - Pinheiro" },
    { id: "1020", name: "1020 - Atães" },
    { id: "1043", name: "1043 - São João Vizela" },
    { id: "1092", name: "1092 - Infias" },
    { id: "1129", name: "1129 - Conde São Martinho" },
    { id: "1130", name: "1130 - Briteiros São Salvador" },
    { id: "1279", name: "1279 - São Clemente de Sande" },

  ]);

  useEffect(() => {
    getCourses().then((response) => {
      setCourses(response.data.concat(courses));
    });
  }, []);

  return (
    <div className="min-h-screen select-none overflow-hidden bg-secondary">
      <Return componentStyle="sm:ml-14 mt-10 sm:mt-20 mb-6" />
      <div className="mb-4 flex flex-col items-center justify-center sm:mt-16">
        <Title text="Registo" />
        <SignUpForm courses={courses} />
        <Text text="Already have an account?" link="Login here" href="/login" />
      </div>
    </div>
  );
}

export default Signup;
