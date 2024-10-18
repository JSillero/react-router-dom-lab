import { MailboxDetails } from "./MailboxDetails";
import { Link } from 'react-router-dom';

export const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes);
    return (
        <>
            <h2>Mailboxes</h2>
            <div>

                {mailboxes.map((mailbox, index) => {
                    return (
                        <Link key={index} to={"/mailboxes/" + index}> Mailbox {index}</Link>

                    )
                })}

            </div>
        </>
    );
}
{ {/* <Link to={"/mailboxes/" + index}> Mailbox {index}</Link> */ } }