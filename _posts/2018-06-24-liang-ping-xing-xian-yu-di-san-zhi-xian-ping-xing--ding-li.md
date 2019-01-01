---
layout: post
title: 两平行线与第三直线平行定理
categories: 几何
tags: [平行]
copyright: cn
book: 数学瑰宝
---

若直线 $AB \px CD$，$CD \px PQ$，则直线 $AB \px PQ$。

<!--more-->

## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/pxx_disanzhixian.svg %}"/>，在直线 $CD$ 上取一点 $M$ ，过 $M$ 作两条直线分别交于 $AB$，$PQ$ 于点 $A$，$B$，$P$，$Q$。直线 $AP$，$BQ$与另一直线 $CD$ 交于点 $C$，$D$。由[平行线分线段成比例定理]({{ site.baseurl }}{% link _posts/2018-06-23-ping-xing-xian-fen-xian-duan-cheng-bi-li-ding-li.md %}) 及 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %}) 有

  $$ \frac{AM}{MQ} = \frac{BD}{DQ} = \frac{BM}{MP} \quad,\quad 
     \frac{S_{\triangle APM}}{S_{\triangle QPM}} = \frac{AM}{MQ} \quad,\quad
     \frac{S_{\triangle BMQ}}{S_{\triangle PMQ}} = \frac{BM}{MP}$$

从而

  $$ S_{\triangle APM} = S_{\triangle BMQ} $$

即有

  $$ S_{\triangle APQ} = S_{\triangle BPQ} $$

*（根据[平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %})）*故

  $$ AB \px PQ $$

* content
{:toc}
