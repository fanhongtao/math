---
layout: post
title: 三角形角平分线性质定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

三角形的内（外）角平分线对边所得两条线段与这个角的两边对应成比例。

如图：

|||
|:--:|:--:|
|<img src="{{ site.baseurl }}{% link /pic/sjx-jiao-ping-fen-xian-xzdl/a.svg %}"/>|<img src="{{ site.baseurl }}{% link /pic/sjx-jiao-ping-fen-xian-xzdl/b.svg %}"/>|
| (a) | (b) |

若 $P$ 为 $\triangle ABC$ 中 $\angle A$ 在内（外）角平分线与 $BC$ 的交点，则 $\frac {AB}{AC} = \frac {BP}{CP}$。

上述定理的发现者没有留下姓名，但它确是平面几何中最重要最基本的定理之一。

<!--more-->

## 证明

如图，作 $CE \px AP$ 交 $BA$（或延长线）于 $E$，则 $AC = AE$，故有

$$ \frac {AB}{AC} = \frac {AB}{AE} = \frac {BP}{CP} $$

这种证明是简单的，且还有三角的、面积的、解析的各种证法等多种，有兴趣的读者可以自己证明。

---

**补充：**

对于图(a)，$AP$ 是 $\angle A$ 的内角平分线，所以 $\angle BAP = \angle PAC$，

由 $CE \px AP$ ，根据 [平行线性质定理 定理3]({{ site.baseurl }}{% link _posts/2018-07-17-pxx-xzdl.md %}#定理3) ，有 $\angle PAC = \angle ACE$  及  $\angle BAP = \angle AEC$ （同位角相等）

$$ \angle ACE = \angle PAC = \angle BAP = \angle AEC $$

由 [等腰三角形判定定理]({{ site.baseurl }}{% link _posts/2018-06-27-dysjx-pan-ding-ding-li.md %}) ，有 $AC = AE$。

同理，对图(b)，有

$$ \angle ACE = \angle PAC = \angle XAP = \angle AEC $$

即  $AC = AE$。

---


* content
{:toc}
