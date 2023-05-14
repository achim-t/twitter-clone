import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";

const ProfilePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <h1>Profile</h1>;
};
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export function getStaticProps() {
  return { props: {} };
}

export default ProfilePage;
