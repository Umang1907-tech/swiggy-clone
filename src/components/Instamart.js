import React, { useState } from "react";

const Section = ({ title, description, toggle, setToggle, onClick }) => {
  console.log(toggle);
  console.log(setToggle);
  //   const [toggle, setToggle] = useState(true);
  return (
    <div className="border border-black p-2 m-2">
      <h3
        className="font-bold text-xl"
        onClick={() => {
          setToggle();
          onClick();
        }}
      >
        {title}
      </h3>
      <p className={toggle ? "visible" : "hidden"}>{description}</p>
    </div>
  );
};

const Instamart = () => {
  const [visiblesection, setVisiblesection] = useState("");
  const handleSectionClick = (sectionName) => {
    if (visiblesection === sectionName) {
      setVisiblesection(""); // Hide the section if it's already visible
    } else {
      setVisiblesection(sectionName); // Show the clicked section
    }
  };
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold mt-24">Instamart</h1>
      <Section
        title="About us"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        toggle={visiblesection == "about"}
        setToggle={() => {
          setVisiblesection("about");
        }}
        onClick={() => handleSectionClick("about")}
      />
      <Section
        title="Team Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        toggle={visiblesection == "team"}
        setToggle={() => {
          setVisiblesection("team");
        }}
        onClick={() => handleSectionClick("team")}
      />
      <Section
        title="Career Instamart"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        toggle={visiblesection == "career"}
        setToggle={() => {
          setVisiblesection("career");
        }}
        onClick={() => handleSectionClick("career")}
      />
    </div>
  );
};

export default Instamart;
