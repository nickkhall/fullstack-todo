import type { FunctionComponent } from 'react'

// Components
import ContentSectionRow from '@/components/content/sectionRow';
import TodoColumn from '@/components/todo/column';

type HomeProps = {

}

export default function Home<FunctionComponent> ({ ...props }: HomeProps) {
  return (
    <ContentSectionRow>
      <TodoColumn columnName={'Today'} />
      <TodoColumn columnName={'Tomorrow'} />
      <TodoColumn columnName={'Next Week'} />
    </ContentSectionRow>
  )
};
