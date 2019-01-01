---
layout: post
title: 平行线与直线垂直的性质定理
categories: 几何
tags: [平行,垂直]
copyright: cn
book: 数学瑰宝
---

直线 $PQ \px AB$，若直线 $l$ 与 $AB$ 垂直，则 $l$ 也与 $PQ$ 垂直。

<!--more-->

## 证明

如图：<img src="{{ site.baseurl }}{% link /pic/pxx_zhixianchuizhi.svg %}"/> ，

直线 $l$ 交 $AB$ 于 $M$，交 $PQ$ 于 $N$。用反证法证明该结论。

设 $\angle NMB = 90^\circ$ ，而 $\angle MNQ \neq 90^\circ$ 。过 $N$ 作 $PQ$ 的垂线交 $AB$ 于 $S$，在 $PQ$ 上取异于点 $N$ 的点 $K$ 。由 $PQ \px AB$，*（和[三角形两边夹角正弦面积公式]({{ site.baseurl }}{% link _posts/2018-07-13-sjx-liang-bian-jia-jiao-zheng-xian-mian-ji-gs.md %})、[平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %})）* 得

$$ \begin{eqnarray}
\frac 1 2 KN \cdot SN &=& \frac 1 2 KN \cdot SN \cdot \sin 90^\circ = S_{\triangle KNS} \\
	&=& S_{\triangle KNM} = \frac 1 2 KN \cdot SN \cdot \sin \angle KNM
\end{eqnarray} $$

$$ \begin{eqnarray}
\frac 1 2 SM \cdot MN &=& \frac 1 2 SM \cdot MN \cdot \sin 90^\circ = S_{\triangle SMN} \\
	&=& \frac 1 2 SM \cdot SN \cdot \sin \angle NSM
\end{eqnarray} $$

上述两式化简，分别得到

$$ SN = MN \cdot \sin\angle KNM < MN \quad , \quad MN = SN \cdot \sin\angle NSM < SN $$

这是两个互相矛盾的式子，从而设 $\angle MNQ \neq 90^\circ$ 是错误的，故 $ l \perp PQ$ 。

* content
{:toc}
