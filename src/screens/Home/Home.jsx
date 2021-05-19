import React from "react";

import HeaderImageSrc from "./Assets/bwHeaderImage.jpeg";
import TeamImageSrc from "./Assets/bwTeamImage.jpeg";

import {
  Wrap,
  HeroImage,
  MainSection,
  MainHeaderText,
  MainBodyText,
  ContactSectionOuter,
  ContactSectionInner,
  ContactHeaderText,
  ContactBodyText,
  TeamSection,
  TeamImage,
  TeamImageCredit
} from "./Home.styled";

const Home = () => (
  <Wrap>
    <HeroImage src={HeaderImageSrc} alt="Begegnungs-Werkstatt" />
    <MainSection>
      <MainHeaderText>
        Wir laden euch ein, gemeinsam eine Welt ohne Spaltungen zu gestalten!
      </MainHeaderText>
      <MainBodyText>
        UNSERE TÄGLICHE ARBEIT:
        <br />
        <br />
        Die Gestalter der Begegnungs-Werkstatt sind täglich durch Berlin
        unterwegs und führen viele ausführliche Gespräche auf der Straße und in
        öffentlichen Räumen und laden die Menschen ein zu fest vereinbarten
        Zweier-Begegnungen - persönliche Treffen zwischen denen, die auf den
        gegenüberliegenden Seiten der vielen gesellschaftlichen Spaltungen
        stehen.
        <br />
        <br />
        Dafür organisieren wir eine geschützte Atmosphäre ohne öffentliche
        Sichtbarkeit, wo sich Diejenigen ungestört begegnen können, die entweder
        besonders konträre Weltanschauungen haben, Berührungsängste voreinander
        haben, miteinander verfeindet sind oder Ähnliches.
        <br />
        <br />
        EINE NEUARTIGE METHODE !
        <br />
        <br />
        Wir sind in der aktuellen Phase (Stand 17.Mai 2021) in vollem Gange
        damit beschäftigt, zwei neuartige Kompetenz-Felder zu etablieren, die
        wir über die letzten Jahre konzipiert haben, mit denen es möglich ist,
        gesellschaftliche Spaltungen aller Art großräumig zu minimieren.
        <br />
        <br />
        Wir bieten kostenlose Einführungs-Workshop an, in denen jeder Mensch
        diese Kompetenzen erlernen kann.
        <br />
        <br />
        Wenn DU neugierig bist, dann bist du herzlich eingeladen, dich bei uns
        zu melden! Du kannst uns entweder schreiben oder uns einfach anrufen.
        <br />
        <br />
      </MainBodyText>
    </MainSection>
    <TeamSection>
      <TeamImage src={TeamImageSrc} alt="Begegnungs-Werkstatt" />
      <TeamImageCredit>Foto © Julia Christ</TeamImageCredit>
    </TeamSection>
    <ContactSectionOuter>
      <ContactSectionInner>
        <ContactHeaderText>Kontakt</ContactHeaderText>
        <ContactBodyText>Begegnungs-Werkstatt</ContactBodyText>
        <ContactBodyText>
          Konzeption: Andrej Goduljan & Sabrina Wägerle
        </ContactBodyText>
        <ContactBodyText>begegnungs-werkstatt (at) mail.de</ContactBodyText>
        <ContactBodyText>0152-1726-4594 (Nur Anrufe)</ContactBodyText>
      </ContactSectionInner>
    </ContactSectionOuter>
  </Wrap>
);

export default Home;
