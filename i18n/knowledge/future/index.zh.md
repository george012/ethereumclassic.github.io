---
title: 未来的经典
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: 根据Ethereum Classic生态系统的历史、原则，概述未来的发展路线图以及如何做出决定。
---

与其他许多区块链项目不同，Ethereum Classic没有一个中央组织委员会来发号施令，因此协议中的内容是通过一个有机的、择优的、新兴的系统来决定的，而不是自上而下的。 虽然这种方法一开始并不是为了产生爆炸性的扩张，但为了长期的可持续发展而做出的权衡，以太坊经典的坚持使它在网络效应开始滚雪球式的采用时，处于下一个增长阶段的有利地位。

在本节中，我们将对这一过程进行解读，对ETC的现状进行高度概括，并简要介绍目前正在讨论的、可能即将出现的ETC的一些潜在升级。

## 升级过程

像比特币一样，以太坊经典版没有传统意义上的软件开发路线图，而是一个过程，如果有好的功能出现并得到社区的认可，就可以实施。

### ECIPs

[以太坊经典改进提案(ECIP)流程](/development/ecips) ，是对以太坊经典的升级进行讨论，并由其开发者社区严格审核的方式。 这个过程是开放的，任何人都可以通过起草ECIP做出贡献，有朝一日可能会被纳入Ethereum Classic。

### 缓慢地移动 & 不要破坏东西

通常情况下，实施新功能需要压倒性的支持，或者至少没有来自Ethereum Classic社区的重大反对意见，这使得ETC和BTC一样，在技术发展方面相当谨慎。 由于没有中央集团对实施何种升级的决定有偏见，由于重大的反击而导致连锁店分裂的威胁，意味着ETC上的硬分叉往往是安全的、渐进的，最重要的是没有争议的。

_而不是 "快速行动，打破东西 "的心态，因为如果出了问题，可能会造成经济损失，重大的更新通常在实施到协议之前，会经过长时间的酝酿、完善和测试，以便在_ 分叉之前能够适当地达成共识。

此外，还注意尽可能地确保早在2015年部署的合同能够忠实地永久运作，并保持 _《守则》是法律_。

这并不意味着ETC无法进行机会主义创新。 其中一个例子是 [Thanos分叉](/knowledge/forks#thanos)，它利用以太坊不断增加的DAG规模扫除了安全问题，允许原本被遗弃的一类GPU开采ETC，这对以太坊经典来说是一个容易实现双赢的升级。

### 继承性创新

以太坊经典保持了与以太坊虚拟机的兼容性，它继承了发生在其他EVM链上的所有创新，包括合约系统、开发者工具、库和其他主要由这些其他链资助和开发的一般概念。

乐观的滚动(Optimistic Rollups)是一项很有前途的第二层技术，通过链外交易提高可扩展性，是这方面的一个很好的例子。 由于自由开源软件的性质，与Ethereum Classic没有关系的项目和团队花费了数百万美元的研究和开发。 这一创新，由于普遍的EVM兼容性，间接地提高了ETC的效用和价值。

### 以太坊作为一个测试网

这种方法的一个好处是，Ethereum Classic可以袖手旁观，看着其他链子承担实施新功能的风险。 只有在它们被证明是安全和有效的之后，才能以最小的风险和开发努力实现好的功能。

这样一来，其他EVM链可以被看作是以太坊经典的激励测试网，比传统的测试网能提供更严格的测试。

## 展望未来

截至发稿时，2022年刚刚到来，ETC在今年年初经历了一个激增的活动。 一连串新的 [应用程序](/services/apps) ，用户也有机地凝聚在一起，ETC生态系统开始显示出网络效应的迹象，随着网络变得更加有用和有价值，这将使采用率滚雪球般上升。

最近的增长部分归功于越来越多的以太坊经典内容创作者和影响者，他们一直在创建 [视频](/videos) 和备忘录，通过社交媒体推动采用。

### 合并

以太坊™主网链，虽然经历了一些小的延迟，但看起来越来越接近完成从工作证明到股权证明的迁移，被称为 _The Merge_。 对于Ethereum Classic来说，这将是一个极其相关的事件，因为新近被驱逐的GPU矿工似乎将寻找其他链来挖矿，而Ethereum Classic是一个明显的选择。

矿工从ETH迁移到ETC可能会给Ethereum Classic生态系统带来一波新的兴趣，增加网络的安全性，并加速采用和网络价值。

此外，如果在 "合并 "期间或之后出现任何短期问题，也许是由于不可预见的博弈论问题或由于额外的复杂性导致的协议漏洞，Ethereum Classic将准备好并等待提供一个后备链，保持在今天久经考验的Ethereum协议。 从长远来看，转向权益证明可能会导致Ethereum™主网的进一步中心化，这使得它容易受到其他类型的社会攻击，同样，ETC将保持对这些攻击的免疫。

### EVM版本控制

由于Ethereum Classic的目标是在未来几十年，甚至几个世纪内保持 _代码就是法律_ ，一个主要的实用功能将是 _，对部署的合约进行版本管理_。 这为Ethereum Classic的长期运营和维护提供了几个显著的优势，特别是它使维护 _代码是法_ ，同时仍为未来升级合约执行提供了灵活性。

与其担心协议变化(如天然气重新定价)是否会破坏旧的合同，版本化将意味着部署的代码保证总是在基于其部署的区块编号的兼容版本的EVM上运行。 此外，未来的合约可以选择加入否则会破坏旧合约的功能，这意味着Ethereum Classic可以提供新的技术，如签名方案，增加或修改操作码行为等，而不影响现有的应用程序。

即使它们运行在不同版本的EVM上，未来的合同仍然能够通过相同的(或翻译过的)API与旧合同进行通信，以保持互操作性。 除了实施版本管理所需的额外复杂性外，似乎没有明显的缺点。

### 第2层

越来越明显的是，扩展区块链的唯一合理方式是分层。 随着比特币的闪电网络率先进入这个充满希望的新领域，以太坊正在以状态通道、乐观滚动、zk-滚动和其他新兴技术的形式跟进。

第2层承诺提供充分的去中心化和不可信任的保证，通过管理链外的状态和使用基础链来解决这个状态，交易吞吐量大得多。 理论上，在许多第二层系统中，每秒的交易数量没有上限，可以满足文明规模的使用要求。

由于Ethereum Classic的EVM和对工作证明的承诺将最终主导ETCHash的挖矿，它将成为主权级基础层的少数选择之一，可以支持全方位的L2解决方案。