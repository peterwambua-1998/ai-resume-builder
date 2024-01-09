import Link from "next/link";


async function getTickets() {
    /**
     * data fetched below will be cached indefinetly so we need next to fetch data again ie
     * revalidate that there is new data or not by passing a second argument like below
     * 
     * 30 is in seconds and we tell next if i visit page for the first time then get the data 
     * if i visit within 30 sec it will serve from cache and if i visit the page after 30 seconds
     * has ellapsed then next will fetch data again 
     * 
     * use zero 0 to avoid cache the data
     */
    const response = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0
        }
    });
    return await response.json();
}


const TicketList = async () => {
    const tickets = await getTickets();
    return ( 
        <main>
            {tickets.map((ticket) => (
                <Link href={`/tickets/${ticket.id}`}>
                    <div key={ticket.id} >
                        <h3 className="text-black">{ticket.title}</h3>
                        <p>peter</p>
                        <p className="text-black">{ticket.body.slice(0, 200)}</p>
                    </div>
                </Link>
            ))}
            {tickets.length === 0 && (
                <p>There are no open tickets</p>
            )}
        </main>
    );
}
 
export default TicketList;