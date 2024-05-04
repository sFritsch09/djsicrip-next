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
            image="https://pb.techchase.de/api/files/baa8qw390ee8nzl/s69bfx907b4murs/kontroll_s2_front_9_s0mjv_nubm_Gsex2jPnw3.png"
            title="Traktor Kontrol S2 MK3"
          />
        </Section>
        <Section ref={titleRef}>
          <Gallery
            arrowClick={handleClick2}
            imageClick={handleClick}
            header="DJ Programm"
            desc="Traktor Pro 3 von Native Instruments für ein professionelles auflegen auf dem Macbook Pro"
            image="https://pb.techchase.de/api/files/baa8qw390ee8nzl/t5f9j2ak04dfccc/traktor_pro_new_c4_xnfnsa0_t_u7F4UILWX8.png"
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
            image="https://pb.techchase.de/api/files/baa8qw390ee8nzl/wrv7hxz1k7x1rft/sound_boks_ck1_fasn_q9x_1gYBcqfDU7.png"
            title="Soundboks 3"
          />
        </Section>
        <Section ref={titleRef3}>
          <Gallery
            arrowClick={handleClick4}
            imageClick={handleClick3}
            header="DJ Controller"
            desc="Traktor Kontrol Z2 von Native Instruments"
            image="https://pb.techchase.de/api/files/baa8qw390ee8nzl/umgppr09w4dvh2q/traktor_z2wide_6_gah6dv_y9_q_XMg54AgzX5.png"
            title="Kontrol Z2"
          />
        </Section>
        <Section ref={titleRef4}>
          <Gallery
            arrowClick={handleClick5}
            imageClick={handleClick4}
            header="Turntables x 2"
            desc="High-Torque DJ-Plattenspieler ST.150 von Stanton"
            image="https://pb.techchase.de/api/files/baa8qw390ee8nzl/y2yks10mdv36710/turntable_xd_cxstdi_ey_H2nxkgDkU3.png"
            title="Stanton ST.150"
          />
        </Section>
      </Container>
    </Fragment>
  );
}
