import { CreateUniqueId } from "../../hooks/UniqueID";

import LightBoxComp from "../LightBoxComp";

const LightBoxChars = (props) => {
  //   const [props.charNum, setprops.charNum] = useState(0);

  const charData = [
    {
      id: 1,
      url: "assets/img_nighflyer.png",
      title: "Nightflyer",
      content1:
        "These are thrill-seekers who've learned night-flying, the ability to dream-share and travel the Astral Skies where they discover the city of Astra, a safe haven for adventure.",
      content2:
        "These Nightflyers come from multiple timelines far and wide, the past and far future looking for an escape from their boring lives. They're ready to embody who they want to be and come into the world as their own.",
      encyclopedia: {
        content: [
          <div key={CreateUniqueId()}>
            <b>Night-flying / Nightflyer</b>
            <br />
            "1. Lucid dreamer, who is aware they’re dreaming."
            <br />
            "2. Has the ability to dream-share with dreamers from other
            timelines."
            <br />
            "3. Can travel through the astral planes by their will alone."
            <br />
            <br />
          </div>,
        ],
      },
    },
    {
      id: 2,
      url: "assets/img_astrian.png",
      title: "Astrian",
      content1:
        "The lords and rulers of Astra, that they built on the ruins of the old city, guiding the realm to an extended time of peace, but with celebrations as a way of life, they have become soft, time for the carnival!",
      content2:
        "These ancient natives, once a nation of powerful spellcasters and the great defenders against the Creeps, without whom, the Astral Skies would have fallen.",
      encyclopedia: {
        content: [
          <i key={CreateUniqueId()}>
            ‘...They did not always appear as they do now, over time their very
            forms have changed, embodying the carnival, and losing their powers,
            while gaining nothing but joy, love and gluttony.’
          </i>,
        ],
      },
    },
    {
      id: 3,
      url: "assets/img_creep.png",
      title: "Creep",
      content1:
        "Ruthless hunters, and rulers of the outer reaches of the Astral Skies, seen as demons who rule with fear, not much more is known about them, other than that they were responsible for the destruction of the first great astral city.",
      content2:
        "These ancient natives, once a nation of powerful spellcasters and the great defenders against the Creeps, without whom, the Astral Skies would have fallen.",
      encyclopedia: {
        content: [
          <i key={CreateUniqueId()}>
            ‘...the legend is that with an army of The Lost they were able to
            destroy the ancient city, nearly dragging the astral skies into the
            void…’
          </i>,
        ],
      },
    },
    {
      id: 4,
      url: "assets/img_rogue.png",
      title: "Rogue",
      content1:
        "The veterans who’ve seen it all, an underground federation that follows no rule, and is loyal to no one but themselves. Living far out in the wilderness, they’ll only be found if they want to be found.",
      content2:
        "They arose during the founding of Astra, a subculture with demi-god-like powers, only they have the power to overcome the Creeps and Lost, but were banished by the Astrains many moons agofor reasons that have been forgotten in time.",
      encyclopedia: {
        content: [
          <i key={CreateUniqueId()}>
            ‘...theories abound that the Rogues were imprisoned Lost that were
            able to escape and come back from their spell, but are permanently
            altered, and will never fully trust the Astrians…’
          </i>,
        ],
      },
    },
    {
      id: 5,
      url: "assets/img_lost.png",
      title: "Lost",
      content1:
        "They're the great tragedy of the Astral Skies, with many imprisoned in ancient temples throughout the old ruins, waiting to be awoken by the Creeps. It’s unknown where their real-world self resides, lost in time.",
      content2:
        "Extremely dangerous and impossible to defeat without teamwork, some roam the wilderness of the Astral Skies, unsure of where they have come from.",
      encyclopedia: {
        content: [
          <i key={CreateUniqueId()}>
            ‘...Some fragments of their previous self remain, but without
            intervention, they remain under the curse…’
          </i>,
        ],
      },
    },
  ];

  return (
    <div id="LIGHTBOXBGCHARS" className="soa_lightbox_comp">
      <div className="content-width margin-center center_vertical">
        <LightBoxComp
          title={charData[props.charNum].title}
          content1={charData[props.charNum].content1}
          content2={charData[props.charNum].content2}
          src={charData[props.charNum].url}
          encyclopedia={charData[props.charNum].encyclopedia.content}
          callBack={props.callBack}
        />
      </div>
    </div>
  );
};

export default LightBoxChars;
