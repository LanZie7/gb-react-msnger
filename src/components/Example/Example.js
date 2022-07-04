
// Компонент можно переиспользовать
export const MyButton = ({ text, onclick }) => (
    <div role="button" onClick={ onclick }>
        { text }
    </div>
)