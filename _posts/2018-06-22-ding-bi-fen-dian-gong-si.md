---
layout: post
title: 定比分点公式
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

若 $P$，$Q$ 两点在直线 $AB$ 的同侧（即线段不与直线 $AB$ 相交），点 $C$ 在线段 $PQ$ 上，且 $PC = \lambda PQ$，则

$$S_{\triangle ABC} = \lambda S_{\triangle QAB} + (1 - \lambda) S_{\triangle PAB}$$

<!--more-->

## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/dingbifendian/a.svg %}"/> ，设四边形 $PABQ$ 的面积为 $S$，则由[共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %})，有

$$\frac{S_{\triangle APC}}{S - S_{\triangle QAB}} = \frac {S_{\triangle APC}}{S_{\triangle APQ}} = \frac {PC}{PQ} = \lambda$$

即 

$$ S_{\triangle APC} = \lambda(S - S_{\triangle QAB}) $$

$$\frac{S_{\triangle BCQ}}{S - S_{\triangle PAB}} = \frac {S_{\triangle BCQ}}{S_{\triangle BPQ}} = \frac {CQ}{PQ} = \frac {PQ - PC}{PQ} = 1 - \lambda$$

即

$$ S_{\triangle BCQ} = (1 - \lambda)(S - S_{\triangle PAB}) $$

从而

$$ \begin{eqnarray} \\
S_{\triangle ABC} &=& S - S_{\triangle APC} - S_{\triangle BCQ} \\
&=& S - \lambda(S - S_{\triangle QAB}) - (1 - \lambda)(S - S_{\triangle PAB})\\
&=& \lambda S_{\triangle QAB} + (1 - \lambda)S_{\triangle PAB}\\
\end{eqnarray} $$

## 注

1、上述证明不能包括所有的情形，如 <img src="{{ site.baseurl }}{% link /pic/dingbifendian/b.svg %}"/> ，这时其证明就要改写成为

$$ \begin{eqnarray} \\
S_{\triangle ABC} &=& S - S_{\triangle ACP} + S_{\triangle BCQ} \\
&=& S - \lambda S_{\triangle PAQ} + (1 - \lambda)S_{\triangle PBQ}\\
&=& S - \lambda (S - S_{\triangle QAB}) + (1 + \lambda)(S_{\triangle PAB} - S)\\
&=& \lambda S_{\triangle QAB} + (1 - \lambda)S_{\triangle PAB}\\
\end{eqnarray} $$


2、虽然题设中线段 $PQ$ 不与直线 $AB$ 相交，但有可能直线 $PQ$ 与直线 $AB$ 相交，这时不妨设直线 $PQ$ 与 $AB$ 交于点 $M$
<img src="{{ site.baseurl }}{% link /pic/dingbifendian/c.svg %}"/> 

由[共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %})，有

$$ \frac{S_{\triangle PAB}}{PM} = \frac{S_{\triangle CAB}}{CM} = \frac{S_{\triangle QAB}}{QM}$$

从而 

$$ \frac{S_{\triangle CAB} - S_{\triangle PAB}}{CM - PM} = \frac{S_{\triangle QAB} - S_{\triangle CAB}}{QM - CM} $$

也就是

$$ \frac{S_{\triangle CAB} - S_{\triangle PAB}}{S_{\triangle QAB} - S_{\triangle CAB}} = \frac{CM - PM}{QM - CM} = \frac{PC}{CQ} = \frac{\lambda}{1 - \lambda} $$

即

$$ (1 - \lambda)(S_{\triangle PAB} - S_{\triangle CAB}) = \lambda(S_{\triangle CAB} - S_{\triangle QAB}) $$

解出得

$$ S_{\triangle CAB} = \lambda S_{\triangle QAB} + (1 - \lambda)S_{\triangle PAB} $$


# 定比分点公式补充

若线段 $PQ$ 与直线 $AB$ 相交于点 $M$，点 $C$ 在线段 $PM$ 上，且 $PC = \lambda PQ$，则

$$S_{\triangle ABC} = (1 - \lambda)S_{\triangle PAB} - \lambda S_{\triangle QAB}$$


## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/dingbifendian/d.svg %}"/>，应用 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %})，得

$$ \frac{S_{\triangle PAB}}{PM} = \frac{S_{\triangle CAB}}{CM} = \frac{S_{\triangle QAB}}{QM}$$

于是有

$$ \frac{S_{\triangle PAB} - S_{\triangle CAB}}{PM - CM} = \frac{S_{\triangle CAB} + S_{\triangle QAB}}{CM + QM} $$

也就是

$$ \frac{S_{\triangle PAB} - S_{\triangle CAB}}{S_{\triangle CAB} + S_{\triangle QAB}} = \frac{PM - CM}{CM + QM} = \frac{PC}{CQ} = \frac{\lambda}{1 - \lambda} $$

解出得

$$S_{\triangle ABC} = (1 - \lambda)S_{\triangle PAB} - \lambda S_{\triangle QAB}$$

* content
{:toc}
