import type { FunctionComponent } from 'react'

// Components
import Todos from '@/components/todos';

type HomeProps = {}

export default function Home<FunctionComponent> ({ ...props }: HomeProps) {
  return (
    <Todos />
  )
};
