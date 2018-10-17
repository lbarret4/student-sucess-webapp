import * as Octokit from '@octokit/rest';

const octokit = new Octokit();

    export default async function getUserCommitNum( username: string){

        try {

            // octokit.authenticate({
            //     type: 'app',
            //     token: '*******************'
            // });

            const results = await octokit.activity.getEventsForUser({ username });
            let commitHashes: string[] = [];
            let pushEvents = await results.data.filter((result: any) => {
                let todaysDate = new Date(Date.now()).toDateString();
                let eventDate = new Date(result["created_at"]).toDateString();

                let hasPushToday = result.type === 'PushEvent' && todaysDate === eventDate ;
                if (hasPushToday) {              
                    commitHashes.push(result.payload.head);
                }
                return hasPushToday;

            });
           let numCommits:number = await pushEvents.length;
           let lastCommitHash = (commitHashes.length !==0? commitHashes[0]: '');
            return { numCommits, lastCommitHash };
        } catch (error) {
            console.log(error);
        }

    }
    
 