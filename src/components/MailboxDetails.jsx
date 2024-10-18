import { useParams } from 'react-router-dom';


export const MailboxDetails = ({ mailboxes }) => {
    const { mailboxindex } = useParams();

    const mailbox = mailboxes[mailboxindex];
    return (
        <div>
            <p>Name: {mailbox.boxHolder} </p>
            <p>Size: {mailbox.size}</p>
        </div>
    );
}
