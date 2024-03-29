import { useSuspenseQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";

import { queryInsights, queryServers } from "src/external/wrapper";
import { FaUser } from "react-icons/fa6";
import "src/styles/servers.css";

const Servers = () => {
  const { data: servers } = useSuspenseQuery({
    queryKey: ["servers"],
    queryFn: queryServers,
  });

  const { data: queue } = useSuspenseQuery({
    queryKey: ["queue"],
    queryFn: queryInsights,
    refetchInterval: 10000,
  });

  const filtered = Object.values(servers).filter(
    (server) => server.status === "online" && !server.private
  );

  const open = filtered.filter((server) => server.accepting_players);
  const closed = filtered.filter((server) => !server.accepting_players);

  return (
    <AnimatePresence>
      <span className="queue-time">
        ESTIAMTED QUEUE WAIT TIME:
        <time>
          {moment.utc(1000 * queue.average_queue_time.duration).format("mm:ss")}
        </time>
      </span>
      <div className="servers-wrapper">
        <div className="servers-container">
          <header>Joinable</header>
          <motion.div
            className="servers"
            animate="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {open.length > 0 ? (
              open.map((server) => <Server server={server} key={server.uuid} />)
            ) : (
              <div className="server">
                <h2>There are no open servers available.</h2>
                <small>Please be patient!</small>
              </div>
            )}
          </motion.div>
        </div>

        <div className="servers-container gradient">
          <header>In Progress</header>
          <motion.div
            className="servers"
            animate="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {closed.length > 0 ? (
              closed.map((server) => (
                <Server server={server} key={server.uuid} />
              ))
            ) : (
              <div className="server">
                <h2>There are no servers currently in progress.</h2>
                <small>Please be patient!</small>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

type ServerProps = {
  server: Server;
};

const Server = ({ server }: ServerProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="server"
    >
      <h2>{server.name}</h2>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${(server.number_of_players / server.max_players) * 100}%`,
          }}
        />
      </div>
      <div className="tag">
        <FaUser />
        <span>{server.number_of_players}</span>
      </div>
      <small>
        {server.build.name} • {server.uuid}
      </small>
    </motion.div>
  );
};

export default Servers;
