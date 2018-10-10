import * as Octokit from '@octokit/rest';

const octokit = new Octokit();

const oct = () => {
    console.log('test');

    async function gitUser(username: string) {
     
        try {
            console.log('inside');
            // octokit.authenticate({
            //     type: 'token',
            //     token: 'git: https://github.com/ on BETAMAX_PC at 14-Aug-2018 18:37'
            // });

            const results= await octokit.activity.getEventsForUser({username, per_page:30, page:1});
            let pushEvents = await results.data.filter( (result)=>{
                
            })
            console.log(await pushEvents).
        } catch (error) {
            console.log(error);
        }

    }
    gitUser('lbarret4');
};

export {oct};

