import {Checkbox} from '#/UI/shadcn-ui/checkbox'

interface CheckboxBlockProps {
  id: string
  text: string
}

const CheckboxBlock: React.FC<CheckboxBlockProps> = ({id, text}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label htmlFor={id} className="text-base leading-none cursor-pointer sm:text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {text}
      </label>
    </div>
  )
}

export default CheckboxBlock
