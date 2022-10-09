
import {Container, InputContainer} from './style.js'
export function Input ({label, icon, register,name, error, ...rest}) {
  return ( <Container>
      <div>
        {label} {!!error && <span>- {error}</span>}
      </div>
      <InputContainer>
      <input {...register(name)} {...rest} />
      </InputContainer>
  </Container>
  )
}
