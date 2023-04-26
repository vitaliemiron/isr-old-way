export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  return {
    props: { post: context.params },
  };
}

export default function Post({ post }: any) {
  return <div>test - {post.id}</div>;
}
