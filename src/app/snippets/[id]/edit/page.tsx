import { SnippetDetailsPageProps } from "@/utils/interfaces";

const SnippetEditPage = (props:SnippetDetailsPageProps) => {
    const id = parseInt(props.params.id);

  return <div>
    Editing snippet with id {id}
</div>;
};

export default SnippetEditPage;
