---
layout: post
title: 平行线唯一性定理
categories: 几何
tags: [平行]
copyright: cn
book: 数学瑰宝
---

过直线 $AB$ 外一点，有且只有一条直线 $PQ$ 平行于 $AB$。

<!--more-->

## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/pxx_weiyixing.svg %}"/>，联结 $PB$，设 $PB$ 的中点为 $M$，联结 $AM$ 延长至 $Q$，使 $MQ = AM$，则

  $$ S_{\triangle ABQ} = 2S_{\triangle AMB} = S_{\triangle ABP} $$

*（根据[平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %})）*从而

  $$ PQ \px AB $$
  
这证明了过点 $P$ 可作 $AB$ 的平行线。

再证唯一性，若 $l$ 也是过点 $P$ 的另一条与 $AB$ 平行的直线，不妨设与 $BQ$ 的交点 $Q'$ 在 $B$，$Q$ 之间，这时 $ S_{\triangle Q’AB} < S_{\triangle PAB} $ （因 $S_{\triangle AQQ'} + S_{\triangle Q'AB} = S_{\triangle QAB} + S_{\triangle PAB}$），于是 $l$ 不与 $AB$ 平行。

* content
{:toc}
