import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();
  const formattedTime = getLocalizedDate(article.publishedDate);

  return (

      <div className="container">
      <dt>
        <h2 className="blog__post-title">{article.title}</h2></h2>
      </dt>
          
          <dd class="blog__post-date"><p>{formattedTime}</p></dd>
            
          
          <dd class="blog__post-content">
            <p>{article.summary}</p>
          </dd>
        
      </div>
    
  );
}