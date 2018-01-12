import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Landing = () => (
    <div className="full-page">
        <div className="main">
            <h1>BigchainDB Boilerplate</h1>
            <h2>Secure. Decentralized. Open.</h2>
            <div>
                <ul>
                    <li><strong>Secure</strong>:
                        Every transaction in the system is cryptographically signed.</li>
                    <li><strong>Decentralized</strong>: We run on <a href="https://www.bigchaindb.com">BigchainDB</a>,
                        a scalable decentralized database.</li>
                    <li><strong>Open</strong>: Everybody can join the exchange.</li>
                </ul>
            </div>

            <Button primary as={Link} to="/wallet">
                Connect to your digital wallet.
            </Button>
        </div>
    </div>
)

export default Landing
