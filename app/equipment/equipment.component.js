"use client";
import { useRef, Fragment } from "react";
import { useScroll } from "../_components/hooks/ScrollContext";
import useScrollBlock from "../_components/hooks/useScrollBlock";

import Gallery from "./gallery.component";
import { Container, Section, Spacer } from "../../styles/equipment.styles";

export default function DJTools() {
  // ref
  const titleRef = useRef();
  const titleRef2 = useRef();
  const titleRef3 = useRef();
  const titleRef4 = useRef();
  const titleRef5 = useRef();

  const handleClick = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    titleRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    titleRef3.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    titleRef4.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick5 = () => {
    titleRef5.current.scrollIntoView({ behavior: "smooth" });
  };
  const hideScroll = useScroll();
  const [blockScroll, allowScroll] = useScrollBlock();
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (hideScroll) {
        document.body.classList.add("no-scroll");
        blockScroll();
      } else {
        document.body.classList.remove("no-scroll");
        allowScroll();
      }
    }
  };
  handleScroll();

  return (
    <Fragment>
      <Spacer />
      <Container>
        <Section ref={titleRef5}>
          <Gallery
            arrowClick={handleClick}
            imageClick={handleClick5}
            header="DJ Controller"
            desc="Traktor Kontrol S2 MK3 von Native Instruments"
            image="https://s3.techchase.de/djsicrip/kontroll_s2_front.png"
            title="Traktor Kontrol S2 MK3"
          />
        </Section>
        <Section ref={titleRef}>
          <Gallery
            arrowClick={handleClick2}
            imageClick={handleClick}
            header="DJ Programm"
            desc="Traktor Pro 3 von Native Instruments für ein professionelles auflegen auf dem Macbook Pro"
            image="https://s3.techchase.de/djsicrip/traktor_pro_new.png"
            title="Traktor Pro 3"
          />
        </Section>
        <Section ref={titleRef2}>
          <Gallery
            showButton
            arrowClick={handleClick3}
            imageClick={handleClick2}
            header="Soundanlage"
            desc="Soundboks 3"
            image="https://s3.techchase.de/djsicrip/sound_boks.png"
            title="Soundboks 3"
          />
        </Section>
        <Section ref={titleRef3}>
          <Gallery
            arrowClick={handleClick4}
            imageClick={handleClick3}
            header="DJ Controller"
            desc="Traktor Kontrol Z2 von Native Instruments"
            image="https://s3.techchase.de/djsicrip/traktor_z2.png"
            title="Kontrol Z2"
          />
        </Section>
        <Section ref={titleRef4}>
          <Gallery
            arrowClick={handleClick5}
            imageClick={handleClick4}
            header="Turntables x 2"
            desc="High-Torque DJ-Plattenspieler ST.150 von Stanton"
            image="https://s3.techchase.de/djsicrip/turntable_xd.png"
            title="Stanton ST.150"
          />
        </Section>
      </Container>
    </Fragment>
  );
}
