import { NewsListItem, NewsListItemType } from './NewsListItem';
import { NewsListItemFeed } from './News';
import { NewsListItemTable } from './News';

type Props = {
  items: NewsListItemType[];
};

export function NewsList(props: Props) {
  // Check if curationListNotAvailable is true and render the "not available" message
  if (props.curationListNotAvailable) {
    return (

    );
  }

  return (
    <ul className="mx-auto w-full md:w-5/6">
      {props.items.map((item, i) => {
        //console.log(item); // log the item object
      
          />
        ) : props.keywordList === 'My Feed' ? (
          <NewsListItem
            key={item.url}
  
            }}
          />
        ) : (
          <NewsListItemTable
            key={item.url}

            }}
          />
        );
      })}
    </ul>
  );
}
