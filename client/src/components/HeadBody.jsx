import HeadBodyM from "./HeadBodyM";
import Header from "./Header";
import TopHome from "./TopHome";

function HeadBody() {
  return (
    <>
      <div
        className="w-full h-[550px] relative bg-cover"
        style={{
          backgroundImage: "url('/hero.jpeg')",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <TopHome />
      </div>
      <HeadBodyM />
    </>
  );
}

export default HeadBody;
