# Lessons From My Time at AWS
##### August 23
##### *Opinions my own*
---

Cloud computing is really really big these days, and this summer I was fortunate enough to intern at the mother of all cloud computing companies, AWS. While my academic and career goal is to go into AI research, it seems that strong engineering abilities are really important for a lot of research areas in AI right now, so I'm quite glad to have gained this experience.

I think of AWS as a colossal group of mostly disconnected cloud services unified by their reliance on Amazon's basic computing and storage resources. Indeed, I worked with the team building live video processing services, something absolutely no one associates with the company Amazon. 

My main work was on autoscaling cloud compute usage, something especially important over this summer as some of the product's major customers were streaming the Paris Olympics to billions of viewers! It was pretty exciting to work on something of such huge scale, but, to be honest, I don't think my experience was dissimilar to that of most other SWE interns. Nevertheless, in this post I'll talk about a few general lessons I learned.

### Stare at the data

One of my main tasks was implementing an ML model to predict user behavior patterns—a pretty standard internship project. Users can create and start channels, which interact in different ways to bind various compute instances. Essentially, the goal was to optimize hardware allocation and predict user activity for scaling compute.

A big lesson I learned was not to be afraid of manually diving through lots of data and model predictions instead of just looking at evaluations. This seems to follow what I've heard before from people in ML. For instance, Andrej Karpathy notably [labeled 2000 ImageNet classifications himself](https://karpathy.github.io/2014/09/02/what-i-learned-from-competing-against-a-convnet-on-imagenet/) to gain intuition for the task and understand his model's weaknesses.

After spending hours looking at the data and trying the task myself, I gained good intuition into my specific problem. This led to ideas for feature engineering and simpler architectures I hadn't considered before. Stuff like "Why is this channel starting every minute for an hour? Oh, that's one of our canary tests, I can exclude it. These channels seem to be periodic biweekly—maybe a good feature is the parity of the week. I wonder what's the variance on the time of day they start?" The goal is to modify the data and model architecture to increase the "good" inductive bias and keep only the variance in the model that's necessary.

I think this sort of manual sifting through data also tells you what a model can and can't realistically achieve. Sometimes, you even realize that the task you're trying to train the AI for is impossible to begin with. A general rule is: if I can't make good predictions after extensive training and effort, it's unlikely the ML model will fare much better. This principle seems to hold across AI domains, maybe with the exception of RL trained through self-play and the like.

### The Cloud is NOT infinite

When most people think about cloud computing and storage, they envision a clean, limitless resource—endless arrays of homogenous servers available on-demand and infinitely scalable. The reality is quite different, though this is only apparent to those building the cloud.

Good engineering *aims* to abstract away the complexities of distributed systems and hardware failovers and internal states, creating the illusion of easy infinite capacity. But, this sometimes leads to ugly and complex designs underneath that are hard to build upon. I recall frequent intense disagreement among engineers and managers over design details that just had no perfect solution.

The cloud is not endless, and anything but clean to operate. It's grounded in physical hardware in data centers with real physical limitations. Some regions' machines are consistently very close to being exhausted. Even when everything appears to be running correctly for some time, there's a thousand things that could go wrong that lead to small scale failures in need of attention. It seems surprisingly difficult to ensure that one rack crashing in a datacenter somewhere doesn't 

This sort of thing only becomes even more complicated with large model training. Meta recently released an amazing [paper](https://ai.meta.com/research/publications/the-llama-3-herd-of-models/) on the training Llama 3.1, and they go quite in depth about their infrastructure challenges, highlighting all of these challenges but stepped up a notch. It's pretty fascinating to read about the headaches of massive scale GPU training, with 4D parallelism and gradient update communications and even environmental considerations. They noted a "diurnal 1-2% throughput variation based on time-of-day ...[as a] result of higher mid-day temperatures impacting GPU dynamic voltage and frequency scaling" and wrote about how the synchronous behavior of large numbers of GPUs led to "instant fluctuations of power consumption across the data center on the order of tens of megawatts, stretching the limits of the power grid."
 
Just as we are hitting phyiscal limitations on the size of the smallest transistors, it seems we might start to hit physical limitations on the size of the largest data centers. 

Going back to how cloud system design can get really complex quickly and suddenly there are new features and issues to resolve that have no good solution, I think my experience really makes me optimistic about teams that build extremely future-aware code from the start. Startups like Modal, which aims to write really good AI infrastructure from the ground up, coding in Rust and, as far as I can tell, tries to reduce complexity everywhere they can, will go very far. When everyone on your team is really cracked, the codebase is amazing.


As computing scales to support training, complexity increases, which leads to my next point.

### There's a Lot of work to be done

Zuck wrote Facebook in his dorm in 2 weeks. Why does Meta need to hire tens of thousands of skilled engineers today? 

There's a viewpoint I hear a lot, especially from people in the startup space, that we are "losing" great thinkers to big tech companies who would otherwise be doing great things and changing the world for the better. I'm pretty sympathetic to the ambition of founders and to all of the small players out there looking to compete against giants like Amazon and Meta. Sometimes they do end up changing the world! After all, that's how the big players started too. However, it's quite uninformed to think that top engineers and researchers going to these big tech companies are wasting their talent.

Individuals at big tech companies can often have really big impact on products, and unlike startups, these products are usually destined to be widely adopted. Managing complex systems is also just extremely hard. It's orders of magnitude harder to do things at scale, and scale is how impact is measured. 

In machine learning, teams at big tech companies are usually at the forefront of innovation, and products made their have ripple effects that benefit a lot of research. For example, frameworks like TensorFlow and JAX from Google and Pytorch from Meta have revolutionized the field of ML.

After reading through Meta's Llama 3.1 paper, it truly seems that the advances in capabilities came not mainly from exciting advances in research on reasoning, but the application of the same old formulas along with advances in infrastructure and data. The Bitter Lesson proves itself yet again. 


I don't see this as a numbers problem. There's enough competent software engineers out there able to write code. In fact, there's definitely too many. CS has, in recent years, become the default pathway for intelligent young people who don't know what to do with their lives. There's not nearly enough software engineers able to make good design decisions, which is a lot harder to train, especially in most CS degree programs. This sort of thing seems to be built only with good intuition and years of experience.





There's a tendency for individual customers to demand features, the team creating a "feature flag" to be turned on for that specific workflow, and then dependency issues arising from too many disparate features to manage and the abstraction that's developed behind the scenes.


Also, there's a lot of performance improvements to be made. A lot of complex software out there used by millions isn't even close to optimal in their usage of hardware, querying of databases, data structures. 

I don't see this as a numbers problem. There's enough competent software engineers out there able to write code. There's not nearly enough software engineers able to make good design decisions, which is a lot harder to train, especially in most CS degree programs. This sort of thing seems to be built with good intuition and years of experience.



If you have the audacity to compete with a human, be better. 


This makes me a bit sad, since research is so much more exciting.

### Conclusion

Aggressively reduce complexity every chance you get

My internship at AWS has given me valuable insights into the realities of cloud computing, the importance of hands-on data analysis, and the significant challenges faced by big tech companies. While I still find research more exciting, I've gained a deeper appreciation for the complex engineering work that underlies much of our technological infrastructure. As AI continues to advance, the interplay between research and practical engineering will only become more crucial.
