
interface CeritaSectionItemProps {
  image: string;
  title: string;
  text: string;
  date: string;
}

const CeritaSectionItem = ({
  image,
  title,
  text,
  date,
}: CeritaSectionItemProps) => {
  return (
    <article>
      <div>
        <img src={image} alt={`Foto ${title}`} />
      </div>

      <div>
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
        <blockquote>{text}</blockquote>
      </div>
    </article>
  );
};

export default CeritaSectionItem;
