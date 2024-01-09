

async function getTicket(id) {
    const response = await fetch('http://localhost:4000/tickets/'+id, {
        next: {
            revalidate: 0
        }
    });
    return await response.json();
}


const TicketDetails = async ({params}) => {
    const ticket = await getTicket(params.id);
    return (  
        <div>
            <p>{ticket.title}</p>
        </div>
    );
}
 
export default TicketDetails;