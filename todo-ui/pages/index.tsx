import type { FunctionComponent } from 'react'

// Components
import ContentSectionRow from 'components/contentSectionRow';
import TodoColumn from 'components/Todo/column';

type HomeProps = {

}

const Home: FunctionComponent = ({ ...props }: HomeProps) => {
  return (
    <ContentSectionRow>
      <TodoColumn columnName={'Today'} />
      <TodoColumn columnName={'Tomorrow'} />
      <TodoColumn columnName={'Next Week'} />
    </ContentSectionRow>
  )
};

export default Home;
