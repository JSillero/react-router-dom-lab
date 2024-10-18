export const MailboxForm = ({ newMail, formData, handleChange }) => {
    return (
        <form onSubmit={newMail}>
            <h2>New Mailbox</h2>
            <p>
                <label onChange={handleChange}>
                    Enter a boxholder:
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange} />
                </label>
            </p>
            <p>
                <label>
                    Select a box size:
                    <select onChange={handleChange} name='size'>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Big">Big</option>
                    </select>
                </label>
            </p>
            <input type="submit" value="Create new Mailbox" />

        </form>
    );
}
