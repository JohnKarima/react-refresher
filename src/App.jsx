import Student from './Student'

function App() {
    return (
        <>
            <Student name="Spongebob" age={30} isStudent={true}></Student>
            <Student name="Patrick" age={42} isStudent={false}></Student>
            <Student name="Squidward" age={50} isStudent={false}></Student>
            <Student name="Sandy" age={20} isStudent={true}></Student>
            <Student name="Larry"></Student>

        </>
    )
}

export default App
