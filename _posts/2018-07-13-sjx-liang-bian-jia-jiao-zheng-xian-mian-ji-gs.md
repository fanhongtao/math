---
layout: post
title: 三角形两边夹角正弦面积公式
categories: 几何
tags: [三角形,面积]
copyright: cn
book: 数学瑰宝
---

对任意的 $\triangle ABC$ ，内角分别记为 $A$，$B$，$C$，它们所对的边记为 $a$，$b$，$c$，则

$$ S_{\triangle ABC} = \frac 1 2 bc \sin A = \frac 1 2 ac \sin B = \frac 1 2 ab \sin C $$

<!--more-->

## 2、证明

在 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) 中，取 $\angle A' = \angle A$，$A'B' = 1$，$A'C' = 1$，则

$$ \frac {S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac {S_{\triangle ABC}}{\frac{\sin A'} 2} = \frac{bc}{1 \times 1} $$

即

$$ S_{\triangle ABC} = \frac 1 2 bc \sin A' = \frac 1 2 bc \sin A $$

同理，可证 $S_{\triangle ABC} = \frac 1 2 ac \sin B = \frac 1 2 ab \sin C$。

## 1、角 $\alpha$ 的正弦

顶角为 $\alpha (0^\circ < \alpha < 180^\circ)$，腰长为 1 的等腰三角形，其面积的数量记为 $S(\alpha)$ 。 $S(\alpha)$ 的 2 倍叫做 $\alpha$ 的正弦，记作 $\sin \alpha$，特别地，当 $\alpha = 90^\circ$ 时， $\sin \alpha = 1$。

---

## 补充

上面的正弦定义和我所学的[正弦定义]({{ site.baseurl }}{% link _posts/2018-07-07-san-jiao-han-shu-ding-yi.md %})不同。不过没有关系，可以简单证明一下。

如图：<img src="{{ site.baseurl }}{% link /pic/sjx_liangbianjiajiaozhengxian.svg %}"/> ，

在等腰 $\triangle ABC$ 中，$AB = AC = 1$，$\angle BAC$ 记为 $\angle \alpha$。$BC$ 为 $a$，设点 $D$ 是 $BC$ 的中点，$AD$ 为 $h$。则：

$$ \frac{BD}{DC} = \frac{AB}{AC} = 1$$

由 [三角形角平分线判定定理]({{ site.baseurl }}{% link _posts/2018-07-06-sjx-jiao-ping-fen-xian-pddl.md %}) ，$AD$ 平分 $\angle BAC$。

设 $\angle BAD$ 为 $\beta$，则有 $\angle BAD = \angle CAD = \beta = \frac 1 2 \alpha $

由 [倍角公式]({{ site.baseurl }}{% link _posts/2018-07-09-san-jiao-han-shu-ji-ben-guan-xi-he-gong-shi.md %}#倍角公式) 

$$ \begin{eqnarray}
  \sin\alpha = \sin 2\beta &=& 2 \sin\beta \cos\beta \\
    &=& 2 \frac{BD}{AB} \frac{AD}{AB} \\
	&=& 2 \frac{\frac 1 2 a}{1} \frac h 1 \\
	&=& ah
\end{eqnarray} $$

又因为三角形面积 $ S = \frac 1 2 a h $，故

$$ 2 S(\alpha) = \sin\alpha $$

* content
{:toc}
