import Container from '../components/Container'

const Login = () => {
  return (
    <Container>
      <div className='flex gap-2'>
        <input type="text" className='py-2 bg-gray-100 pl-2' placeholder='Seu e-mail' />
        <input type="password" className='py-2 bg-gray-100 pl-2' placeholder='Sua senha' />
      </div>
    </Container>
  )
}

export default Login
